const Ponto = require('../models/Ponto')
const getMapLocal = require('../services/service')
const getGoogleMapsLink = require('../services/service')

class PontosControllers {

    async criar(request, response) {
        try {
            const dados = request.body;
            const userId = request.user.id; 

            if (!dados.nomeLocal || !dados.descricao || !dados.cep || !dados.residuo) {
                return response.status(400).json({ mensagem: "Preencha todos os campos obrigatórios. (Nome do local, descrição, cep e resíduo)" });
            }

            const pontoExistente = await Ponto.findOne({
                where: { cep: dados.cep, usuario_id: userId },
            });

            if (pontoExistente) {
                return response
                    .status(409)
                    .json({ mensagem: "CEP já cadastrado por você." });
            }

            const cepExistente = await Ponto.findOne({ where: { cep: dados.cep } });

            if (cepExistente) {
                return response.status(409).json({ mensagem: "CEP já cadastrado." });
            }

            if (dados.latitude || dados.longitude) {
                return response.json({
                    mensagem: "As coordenadas geográficas são preenchidas automaticamente.",
                });
            }

            const coordenadas = await getMapLocal(dados.cep);

            if(coordenadas.error === "Localização não encontrada"){
                response.status(404).json({mensagem: "Não encontramos as coordenadas de seu CEP, por favor tente novamente!"})
            }

            dados.latitude = coordenadas.latitude;
            dados.longitude = coordenadas.longitude;
            dados.usuario_id = userId; 

            await Ponto.create(dados);
            return response
                .status(201)
                .json({ mensagem: "Ponto registrado com sucesso!" });
        } catch (error) {
            console.log(error);
            return response
                .status(500)
                .json({
                    mensagem:
                        "Não foi possível criar o ponto de coleta, devido a um erro interno",
                });
        }
    }
    async visualizarTodos(request, response){
        try{
            const dados = request.body
            const nomeLocal = dados.nomeLocal
            const userId = request.user.id; 

        if(nomeLocal){

            const ponto = await Ponto.findOne({where:{nomeLocal: dados.nomeLocal, usuario_id: userId}})
    
            if (!ponto) {
                response
                  .status(404)
                  .json({ mensagem: "Não foi encontrado o ponto requisitado" });
              }
        
              return response.status(200).json(ponto);

        }
        
        const pontos = await Ponto.findAll({where: {usuario_id:userId}})

            if (!pontos[0]){
                return response.status(404).json({mensagem: "Nenhum ponto encontrado."})
            }

            
            const pontosComDetalhes = await Promise.all(
                pontos.map(async (ponto) => {
                  const coordenadas = await getMapLocal(ponto.cep);
          
                  return {
                    nomeLocal: ponto.nomeLocal,
                    descricao: ponto.descricao,
                    coordenada: coordenadas.googleMapsLink,
                  };
                })
              );
          

                return response.status(200).json(pontosComDetalhes)
            }
        catch(error){
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível visualizar os pontos registrados, devido a uma falha interna."})
        }
    }

    async visualizarUm(request, response){
        try {

        const userId = request.user.id; 
        const id = request.params.id
        const ponto = await Ponto.findByPk(id)


        if (!ponto) {
            response
              .status(404)
              .json({ mensagem: "Não foi encontrado o ponto requisitado" });
          }

          if(ponto.usuario_id !== userId){
            response.status(401).json({mensagem: "Você não está autorizado a visualizar pontos que não foram registrados por você."})
        }
    
          return response.status(200).json(ponto);

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível visualizar o pontos solicitado, devido a uma falha interna."})

        }

    }

    async deletarPonto(request, response){
        try {
            const userId = request.user.id; 

            const id = request.params.id
            
            const ponto = await Ponto.findByPk(id)

            if (!ponto) {
                response
                  .status(404)
                  .json({ mensagem: "Não foi encontrado o ponto requisitado" });
              }

              if(ponto.usuario_id !== userId){
                response.status(401).json({mensagem: "Você não está autorizado a excluir esse ponto."})
            }

            await ponto.destroy()

            return response.status(200).json({mensagem: `${ponto.nomeLocal}, foi deletado com sucesso`})

            
        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível deletar o pontos solicitado, devido a uma falha interna."})

        }
    }

    async atualizarPonto(request, response){

        try {
            const userId = request.user.id; 

            const dados = request.body
            const id = request.params.id

            const ponto = await Ponto.findByPk(id)

        if (!ponto) {
            response
              .status(404)
              .json({ mensagem: "Não foi encontrado o ponto requisitado" });
          }

          if(ponto.usuario_id !== userId){
            response.status(401).json({mensagem: "Você não está autorizado a alterar esse ponto."})
        }
          
        
        ponto.nomeLocal = dados.nomeLocal
        ponto.descricao = dados.descricao
        ponto.cep = dados.cep
        ponto.residuo = dados.residuo

        if(dados.latitude || dados.longitude){
            return response.json({mensagem:"Não é possível alterar a latitude e longitude do ponto."})
        }

        await ponto.save()

          return response.status(200).json(ponto);

            
        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível atualizar o pontos solicitado, devido a uma falha interna."})

        }
    }

    async vizualizarMapa(request,response){
        try{
        const id = request.params.id
        const ponto = await Ponto.findByPk(id)
        const userId = request.user.id; 


        if (!ponto) {
            response
              .status(404)
              .json({ mensagem: "Não foi encontrado o ponto requisitado" });
          }

          if(ponto.usuario_id !== userId){
            response.status(401).json({mensagem: "Você não está autorizado visualizar o mapa esse ponto."})
        }
          const coordenadas = await getMapLocal(ponto.cep);

          return response.status(200).json(coordenadas.googleMapsLink);

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível visualizar o pontos solicitado, devido a uma falha interna."})

        }

    }
}

module.exports = new PontosControllers()