const Ponto = require('../models/Ponto')
const getMapLocal = require('../services/service')

class PontosControllers {

    async criar(request, response){
        try{
            const dados = request.body

            if(!dados.nomeLocal || !dados.usuario_id || !dados.descricao || !dados.cep || !dados.residuo){
                return response.status(400).json({mensagem: "Preencha todos os campos obrigatórios. (Id usuário, nome do local, descrição, cep e resíduo)"})
            }



            const cepExistente = await Ponto.findOne({ where: { cep: dados.cep } });


            if (cepExistente) {
                return response.status(409).json({ mensagem: "CEP já cadastrado." });
            } 

            const coordenadas = await getMapLocal(dados.cep)
            
            dados.latitude = coordenadas.latitude
            dados.longitude = coordenadas.longitude

            await Ponto.create(dados)
            return response.status(201).json({mensagem: "Ponto registrado com sucesso!"})

        }catch(error){
            console.log(error)
            return response.status(500).json({mensagem : "Não foi possível criar o usuário, devido a um erro interno"})
        }
    }

    async visualizarTodos(request, response){
        try{
            const dados = request.body
            const nomeLocal = dados.nomeLocal

        if(nomeLocal){

            const ponto = await Ponto.findOne({where:{nomeLocal: dados.nomeLocal}})
    
            if (!ponto) {
                response
                  .status(404)
                  .json({ mensagem: "Não foi encontrado o ponto requisitado" });
              }
        
              return response.status(200).json(ponto);

        }
        
        const pontos = await Ponto.findAll()

            if (!pontos[0]){
                return response.status(404).json({mensagem: "Nenhum ponto encontrado."})
            }

            const pontosComDetalhes = []

            pontos.forEach(ponto => {
              pontosComDetalhes.push({
                nomeLocal: ponto.nomeLocal,
                descricao: ponto.descricao 
              });
            });

                return response.status(200).json(pontosComDetalhes)
            }
        catch(error){
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível visualizar os pontos registrados, devido a uma falha interna."})
        }
    }

    async visualizarUm(request, response){
        try {

        const id = request.params.id
        const ponto = await Ponto.findByPk(id)

        if (!ponto) {
            response
              .status(404)
              .json({ mensagem: "Não foi encontrado o ponto requisitado" });
          }
    
          return response.status(200).json(ponto);

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível visualizar o pontos solicitado, devido a uma falha interna."})

        }

    }

    async visualizarUmPeloNome(request, response){
        try {

        const dados = request.body



        const nomeLocal = dados.nomeLocal

        if(nomeLocal){

            const ponto = await Ponto.findByPk(nomeLocal)
    
            if (!ponto) {
                response
                  .status(404)
                  .json({ mensagem: "Não foi encontrado o ponto requisitado" });
              }
        
              return response.status(200).json(ponto);

        }

        } catch (error) {
            console.log(error)
            return response.status(500).json({mensagem: "Não foi posível visualizar o pontos solicitado, devido a uma falha interna."})

        }

    }

    async deletarPonto(request, response){
        try {

            const id = request.params.id
            
            const ponto = await Ponto.findByPk(id)

            if (!ponto) {
                response
                  .status(404)
                  .json({ mensagem: "Não foi encontrado o ponto requisitado" });
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

            const dados = request.body
            const id = request.params.id

            const ponto = await Ponto.findByPk(id)

        if (!ponto) {
            response
              .status(404)
              .json({ mensagem: "Não foi encontrado o ponto requisitado" });
          }
          
        
        ponto.usuario_id = dados.usuario_id
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
}

module.exports = new PontosControllers()