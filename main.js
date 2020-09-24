const http = require('http');
const fs = require('fs');
const url = require('url');

function createTemplate(title, dataList, body) {
  return `<!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${dataList}
      ${body}
    </body>
    </html>`;
}

function createList(fileList) {
  let dataList = `<ul>`;
        for (let i = 0; i < fileList.length; i++) {
          dataList += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
        }
        dataList += `</ul>`;
  return dataList;
}

let app = http.createServer(function(request,response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;

  if (pathname === '/') { // 정상적으로 작동하는 페이지
    fs.readFile(`data/${title}`, 'utf8', (err, description) => {
      if (title === undefined) {  // index 페이지일 경우
        title = 'Welcome';
        description = "Hello, node.js!";
      }

      fs.readdir('data', (err, fileList) => {
        let dataList = createList(fileList);
        let template = createTemplate(title, dataList, `<h2>${title}</h2>${description}`);

        response.writeHead(200);
        response.end(template);
      });
    });
  } else {  // 오류 페이지
    response.writeHead(404);
    response.end('Not Found');
  }    
});
app.listen(3000);
// 파일 불러오기: response.end(fs.readFileSync(__dirname + _url));
// 콘솔 입력: args = process.argv[2]