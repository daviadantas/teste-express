const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log('iniciando servidor...')
});

app.get('/usuarios', (req, res) => {
    console.log('entrou em usuarios')
    res.status(200).send('Deu bom')
}) 

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    console.log('buscou um usuario')
    res.status(200).send(req.body)
}) 