'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));
app.use(_bodyParser2.default.text({
    type: "text/plain"
}));
app.use('/', (0, _api2.default)());
app.use(errorHandler);

function errorHandler(err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(400).json({ "error": 1, "message": err, "data": "" });
    }
}
app.server.listen(process.env.PORT || 3000, function () {
    console.log('Started on port ' + app.server.address().port);
});
//# sourceMappingURL=index.js.map