<h1>EcoMap Floripa♻️ - Backend</h1> 

Descrição do Problema Resolvido:
O EcoMap Floripa é uma aplicação web desenvolvida em React que tem como objetivo fornecer informações sobre pontos de coleta de lixo na cidade de Florianópolis, Santa Catarina.
O problema que o software resolve está relacionado à necessidade de conscientização e facilidade de acesso a informações sobre locais adequados para descarte de resíduos, 
contribuindo para a preservação do meio ambiente e para a promoção de práticas sustentáveis na comunidade.

<h3>Técnicas e Tecnologias Utilizadas:</h3>

**Node.js:** Ambiente de execução JavaScript, servindo como base para o desenvolvimento do backend do Ecomap./n
**Express.js:** Framework web leve e flexível para Node.js, utilizado para criar a estrutura da API RESTful do Ecomap, permitindo a comunicação entre o frontend e o backend./n
**PostgreSQL:** Sistema de gerenciamento de banco de dados relacional (RDBMS) robusto e escalável, utilizado para armazenar as informações do Ecomap, como dados de usuários, locais de coleta e registros de coleta./n
**Sequelize:** ORM (Object-Relational Mapper) para Node.js, simplificando a interação com o banco de dados PostgreSQL, permitindo a criação de modelos de dados, consultas e operações CRUD (Create, Read, Update, Delete) de forma mais organizada e eficiente./n
**Sequelize-CLI:** Ferramenta de linha de comando para Sequelize, facilitando a criação de tabelas, migrações e outras operações relacionadas ao banco de dados./n
**CORS:** Mecanismo que permite que recursos de diferentes origens (domínios, protocolos e portas) se comuniquem, garantindo segurança e flexibilidade na comunicação entre o frontend e o backend./n
**JWT (JSON Web Token):** Padrão para criação de tokens de autenticação, utilizado para gerenciar a autenticação de usuários e garantir a segurança das requisições à API./n
**Nodemon:** Ferramenta que monitora as alterações nos arquivos do projeto e reinicia automaticamente o servidor Node.js, agilizando o processo de desenvolvimento e testes./n
**Dotenv:** Biblioteca para gerenciar variáveis de ambiente, como credenciais do banco de dados e chaves secretas, separando-as do código-fonte e garantindo a segurança da aplicação./n
**Swagger:** Ferramenta para documentação de APIs, permitindo a criação de uma interface interativa para visualizar e testar as endpoints da API, facilitando o desenvolvimento e a integração com outras aplicações./n


<h3>✨Como Executar:</h3>

1. **Pré-requisitos:**
    * Node.js e npm instalados.
    * PostgreSQL instalado e configurado.
  
2. **Clone o repositório:**
    ```bash
    git clone 
    ```
3. **Instale as dependências:**
    ```bash
    npm install
    ```
4. **Configure as variáveis de ambiente:**
    * Crie um arquivo `.env`, duplicando o arquivo .env_example
 
5. **Crie o banco de dados:**
    * Use o Sequelize-CLI para criar as tabelas do banco de dados:
        ```bash
        npx sequelize db:migrate
        ```
6. **Inicie o servidor:**
    ```bash
    npm run start:dev
    ou
    npm run start:prod
    ```
7. **Documentação**
   
     * Você pode acessar a documentação da API através da URL: `http://localhost:3000/api-docs` (ou outra porta configurada).




