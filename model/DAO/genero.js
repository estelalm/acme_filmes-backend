/***********************************************************************************
 * Objetivo: Arquivo responsável pela manipulação de dados no Banco de Dados MySQL,
 * aqui realizamos o CRUD (Create, Read, Update, Delete) ultilizando a linguagem SQL
 * Data: 11/04/2024
 * Autora: Giovanna
 * Versão: 1.0
 * *********************************************************************************/

//import da biblioteca do prisma client
const { PrismaClient } = require('@prisma/client');

//instância da classe prisma client
const prisma = new PrismaClient();

//função para inserir novo gênero no banco de dados
const insertFilme = async function() {

  let sql;
}   