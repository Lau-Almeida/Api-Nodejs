const path = require("path"); // Está importando o módulo path do node.js, que é responsável por lidar com caminhos de arquivos e diretórios.
const express = require("express"); // Está importando o módulo express pelo Node.js para a variável express.

module.exports = (app) => {
  /* 
    - GET: Buscar/obter uma ou mais informações do back-end.
    - POST: Criar uma nova informação no back-end.
    - PUT: Atualizar uma informação existente no back-end.
    - DELETE: Remover uma informação do back-end.
  */

  const tasks = []; // cria um array vazio para armazenar as tarefas.

  // O "use" é responsável por adicionar um plugin no express, ele recebe um parâmetro que é o plugin.
  app.use(express.json()); // Está adicionando o plugin json no express, ele converte o corpo da requisição para json.

  app.use(express.static(path.join(__dirname, "../../public"))); // Falando para o express que a pasta public é a pasta de arquivos estáticos.

  // Irá obter a rota e retornar o arquivo index.html.
  app.get("/", (req, res) => {
    const index = path.join(__dirname, "../../public/index.html"); // criando uma variável com o caminho arquivo index.html.
   
    return res.sendFile(index); // Está retornando o arquivo index.html.
  });
}