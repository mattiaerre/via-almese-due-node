﻿var app = require('./app');

app.set('port', process.env.PORT || 3030);

var server = app.listen(app.get('port'), function () {
    console.log('express server listening on port ' + server.address().port);
});
