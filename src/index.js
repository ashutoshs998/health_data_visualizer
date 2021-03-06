import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
import cors from 'cors';

let app = express();
app.server = http.createServer(app);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text({
    type: "text/plain"
}));
app.use('/', api());
app.use(errorHandler);

function errorHandler(err, req, res, next) {
    if (err) {
        console.log(err)
        res.status(400).json({ "error": 1, "message": err, "data": "" });
    }
}
app.server.listen(process.env.PORT || 3000, () => {
    console.log(`Started on port ${app.server.address().port}`);
});