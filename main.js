var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;

  if (pathname === '/') {
    fs.readFile(`data/${title}`, 'utf8', (err, description) => {
      if (title === undefined) {
        title = 'Welcome';
        description = "Hello, node.js!";
      }

      fs.readdir('data', (err, files) => {
        var dataList = `<ul>`;
        for (let i = 0; i < files.length; i++) {
          dataList += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`;
        }
        dataList += `</ul>`;

        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${dataList}
          <h2>${title}</h2>
          ${description}
        </body>
        </html>
        `;

        response.writeHead(200);
        response.end(template);
      });
    });
  } else {
    response.writeHead(404);
    response.end('Not Found');
  }    
});
app.listen(3000);
// 파일 불러오기: response.end(fs.readFileSync(__dirname + _url));
// 콘솔 입력: args = process.argv[2]