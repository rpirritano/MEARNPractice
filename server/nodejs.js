let express = require('express'),
app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('*', function (req, res) {
    res.send(
        '<h1>Hello World Star</h1>'
    );
})


var server = app.listen(8081, function () {
    
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port) })


