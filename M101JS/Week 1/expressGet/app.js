var express = require('express'),
    app = express(),
    engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
}

app.get('/:name', function(req, res, next) {
    var name = req.params.name;
    var getVar1 = req.query.getVar1;
    var getVar2 = req.query.getVar2;
    res.render('name', { name : name, getVar1 : getVar1, getVar2 : getVar2 });
});

app.use(errorHandler);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});
