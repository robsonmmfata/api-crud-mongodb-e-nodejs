//config inicial 
const mongoose = require('mongoose')
const express= require('express')
const app = express()




//forma de ler json //middlewares são requisições que recebe as respostas
app.use(
express.urlencoded({
    extended:true
})

)

app.use(express.json())

//rotas da api
const personRoutes= require('./routes/personRoutes')

app.use('/person',personRoutes)


//rota inicial/ endpoint
app.get('/',(req,res)=>{

//mostrar requisições
res.json({message:'oi express'})

})

//entregar uma porta
const DB_USER='robsonmmf'
const DB_PASSWORD=encodeURIComponent('qJh3CcCavQhGLTYJ');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.um6zp.mongodb.net/bancodaapi?retryWrites=true&w=majority`,)

.then(()=>{
    console.log("conectamos ao mongodb!")
    app.listen(3000)

})
.catch((erro)=>console.log(erro))



//senha e usuario mongodb database robsonmmf senha 320809eu
//mongodb+srv://robsonmmf:<320809eu>@apicluster.um6zp.mongodb.net/bancodaapi?retryWrites=true&w=majority