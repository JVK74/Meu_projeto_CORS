const http = require("http");

const PORT = 8080;

http.createServer((req, res) => {

  // PRELIGHT (OPTIONS)
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Identificador-Estudante, Content-Type",
      "Access-Control-Max-Age": "60"
    });

    res.end();
    return;
  }

  // ROTA PRINCIPAL
  if (req.method === "GET" && req.url === "/dados") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    });

    res.end(
      JSON.stringify({
        matricula: "SUA_MATRICULA_REAL",
        status: "dados_sensiveis"
      })
    );

    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json; charset=utf-8"
  });

  res.end(
    JSON.stringify({
      erro: "Nao encontrado"
    })
  );

}).listen(PORT, () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
});