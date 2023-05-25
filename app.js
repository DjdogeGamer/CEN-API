const express = require('express');
const S3UtilAPI = require('./S3UtilAPI');

const app = express();

const bucketName = 'sqlite-js-ispg-test';
const fileName = 'db.sqlite';
const accessKeyId = 'AKIA4ZDOYH5F6H3ASIGQ';
const secretAccessKey = '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';

const PORT = process.env.PORT || 3000;

const S3Util = new S3UtilAPI(bucketName, accessKeyId, secretAccessKey);

app.use((req, res, next) => {
    const allowedOrigins = [
        'http://localhost:8081', // Substitua pelo domínio local do seu jogo
        'https://cen-jogo-phaser.nw.r.appspot.com' // Substitua pelo domínio do seu jogo no Google App Engine
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send('CEN-API is running.');
});

app.get('/query', (req, res) => {
    const sqlQuery = req.query.sqlQuery;
    const fileName = req.query.fileName;
    S3Util.executeQuery(sqlQuery, fileName, (result) => {
        res.set('Content-Type', 'application/json')
        res.send(result);
    });
});

app.get('/asset', (req, res) => {
    const fileName = req.query.fileName;
    S3Util.loadAsset(fileName, (result) => {
        res.set('Content-Type', 'image/jpg');
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
});
