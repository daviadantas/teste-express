const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log('servidor iniciado')
});

//GET  para buscar todos os usuarios
app.get('/usuarios', (req, res) => {
    console.log('entrou em usuarios')
    res.status(200).send('usuarios buscados')
}) 

//GET buscando usuario por id
app.get('/usuarios/:id',(req,res) => {
    console.log(req.query)
    console.log('usuario buscado')
    res.status(200).send('usuario buscado com sucesso')
})

//POST cadastrar usuario
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    console.log('novo usuario cadastrado')
    res.status(200).send('usuario cadastrado com sucesso')
}) 
//PUT atualizar dados
app.put('/usuarios/:id', (req,res) => {
    console.log(req.body)
    console.log('dados de um usuario foi atualizado')
    res.status(200).send('dados atualizados =)')
})
//DELETE deletar um usuario
app.delete('/usuarios/:id',(req,res) => {
    console.log(req.query)
    console.log('um usuario foi deletato')
    res.status(200).send('usuario deletado')
})