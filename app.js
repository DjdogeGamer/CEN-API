const express = require('express');
const S3UtilAPI = require('./S3UtilAPI');

const app = express();

const bucketName = 'sqlite-js-ispg-test';
const fileName = 'db.sqlite';
const accessKeyId = 'AKIA4ZDOYH5F6H3ASIGQ';
const secretAccessKey = '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';

const S3Util = new S3UtilAPI(bucketName, accessKeyId, secretAccessKey);

app.get('/', (req, res) => {
    res.send('CEN-API is running.');
});

app.get('/query', (req, res) => {
    const sqlQuery = req.query.sqlQuery;
    const fileName = req.query.fileName;
    S3Util.executeQuery(sqlQuery, fileName, (result) => {
        res.send(result);
    });
});

app.get('/asset', (req, res) => {
    const fileName = req.query.fileName;
    S3Util.loadAsset(fileName, (result) => {
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});
