const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);





/*
    Rota = link todo da página / Recurso = users, id, etc

    -----------------------------

    Métodos HTTP:

        GET: Buscar/listar uma informação no back-end
        POST: Criar uma informação no back-end
        PUT: Altera uma informação no back-end
        DELETE: Deletar uma informação no back-end

    Tipos de parâmetros:

        Query Params: Parâmetros nomeados enviados na rota após o simbolo de interrogação (filtros, usúarios, etc)
        Route Params: Parâmetros para identificar recursos
        Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

    Bancos de dados:

        SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
        NoSQL: MongoDB, CouchDB, etc.

    Método de busca no SQL pelo próprio driver ficaria assim:

        - Driver: SELECT * FROM users

    Já no Query Builder (método de manipular o BD com linguagem js):

        - Query Builder: table('users').select(*).where()
 */



