var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    var dataFile = 'data';
    fs.readdir(dataFile, (err, dataList) => {
      dataList.forEach(data => {
        console.log(data);
      })
    });

    if (pathname === '/') {
      fs.readFile(`data/${title}.txt`, 'utf8', (err, description) => {
        if (title === undefined) {
          title = 'Welcome';
        }

        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          ${description}
        </body>
        </html>
        `;
  
        response.writeHead(200);
        response.end(template);
      });
    } else {
      response.writeHead(404);
      response.end('Not Found');
    }
    
});
app.listen(3000);
// 파일 불러오기: response.end(fs.readFileSync(__dirname + _url));
// 콘솔 입력: args = process.argv[2]