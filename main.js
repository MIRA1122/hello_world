var http = require('http');
var server = http.createServer(function(request,response){
    // リクエストを受けると以下のレスポンスを送信する
    response.writeHead(200, {'Content-Type':'text/plain'});//レスポンスヘッダーに書き込み
    response.write('Hello Hello\n');
    //response.write('Hello 江幡')  //漢字を使ったら文字化けした
    response.end();// レスポンス送信を完了する
});

server.listen(process.env.PORT || 8080); //8080番ポートで待ち受け
