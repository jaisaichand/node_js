
var http = require('http');
var url = require('url');

http.createServer(
    function(req,res){
        res.writeHead(200, {'content-type':'text/html'});
        
        var q = url.parse(req.url,true).query;
        const msg = q.year + ' ' + q.name;
        res.end(msg);

    }
).listen(8080);