const axios = require('axios');

const ENDPOINT = 'http://localhost:3000';

// Query endpoint
axios.get(ENDPOINT, {
    params: {
        sqlQuery: 'SELECT * FROM tabela_teste',
        fileName: 'db.sqlite'
    }
}).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.error(error);
});

// Asset endpoint
axios.get(ENDPOINT, {
    params: {
        fileName: 'bg.jpg'
    }
}).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.error(error);
});
