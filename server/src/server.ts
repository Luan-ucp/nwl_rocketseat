import express, { response } from 'express' //mudo o .json com type = module e altero o nome do arquivo .js para .mjs

const app = express()

//passar o endereço que o usuario irá digitar na barra
app.get('/ads', (request, response) => {
    //console.log('Acessou Ads!')
    //return response.send('Acessou Ads!')
    return response.json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {id: 4, name: 'Anuncio 4'},
    ])  //mas, vamos retornar nossas informações no formato .json
})

app.listen(3333)