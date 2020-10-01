const template = {
    HTML : function(title, dataList, body) {
      return `<!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${dataList}
          <a href="/create">Create Form</a>
          ${body}
        </body>
        </html>`;
    },
    list : function(fileList) {
      let dataList = `<ul>`;
            for (let i = 0; i < fileList.length; i++) {
              dataList += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
            }
            dataList += `</ul>`;
      return dataList;
    },
    form : function() {
      return `<form action="http://localhost:3000/create_process" method="post">
        <p><input type=text name="title" placeholder="title"></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><input type="submit"></p>
      </form>`;
    }
  }

  module.exports = template;