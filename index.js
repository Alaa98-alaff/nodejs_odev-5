const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>Index Syafasina hosgeldiniz</h2>");
  } else if (url === "/hakkinda") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>Hakkinda Sayfasine hosgeldiniz</h2>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>iletisim sayfasina hosgeldiniz</h2>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end();
});

const port = 5000;
server.listen(port, () => console.log(`Sunucu port ${port} de başlatıldı`));
