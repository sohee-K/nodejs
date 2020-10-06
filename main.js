const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const template = require('./template.js');

function createApp() {
  let app = http.createServer(function(request,response) {
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    let title = queryData.id;

    if (pathname === '/') {  // 정상적으로 작동하는 페이지
      fs.readFile(`data/${title}`, 'utf8', (err, description) => {
        if (title === undefined) {  // index 페이지일 경우
          title = 'Welcome';
          description = "Hello, node.js!";
        }

        fs.readdir('data', 'utf8', (err, fileList) => {
          let dataList = template.list(fileList);
          let html = template.HTML(title, dataList, `<h2>${title}</h2>${description}`);

          response.writeHead(200);
          response.end(html);
        });
      });
    } else if (pathname === '/create') {  // create form
      title = 'Web1 - Create';
      fs.readdir('data', 'utf8', (err, fileList) => {
        let dataList = template.list(fileList);
        let html = template.HTML(title, dataList, template.form());

        response.writeHead(200);
        response.end(html);
      });
    } else if (pathname === '/create_process') {  // create process
      let body = '';
      request.on('data', function (data) {
        body += data;
      });
      request.on('end', function() {
        let post = qs.parse(body);
        let p_title = post.title;
        let p_description = post.description;

        fs.writeFile(`data/${p_title}`, p_description, 'utf8', (err) => {
          response.writeHead(302, {'Location': `/?id=${p_title}`});
          response.end();
        });
      });
    } else {  // 오류 페이지
      response.writeHead(404, { 'Content-Type' : 'text/plain'});
      response.end('Not Found');
    }    
  });
  app.listen(3000, '127.0.0.1');
}

function init() {
  createApp();
}

init();
// 파일 불러오기: response.end(fs.readFileSync(__dirname + _url));
// 콘솔 입력: args = process.argv[2]