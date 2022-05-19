const router = require('express').Router()
const Person = require('../models/Person')
//rotas da apicluster
router.post('/',async (req,res)=>{

    //req.body
    const{name,salary,approved}=req.body

    if (!name) {
       res.status(422).json({error:'o nome é obrigatorio'}) 
      return
    }
    const person ={
        name,
        salary,
        approved,
    }
//create mongoose
try {
  //aqui estou criando dados
    await Person.create(person)
    res.status(201).json({message:'Pessoa inserida no sistema com sucesso!'})
    
} catch (error) {
    res.status(500).json({error: error})
}


})
//read leitura de dados
router.get('/',async(req,res)=>{
try {
    const people = await Person.find()
    res.status(200).json(people)

} catch (error) {
    res.status(500).json({error: error})
}

})

router.get('/:id', async (req,res)=>{
//extraindo os dados da requisição,como não ta  inserindo pelo body,vai vir pelo req.params
const id = req.params.id

try {
    if (!person) {
        res.status(422).json({message:'o usuario não foi encontrado'})
        return
    }
    const person = await Person.findone({_id:id})
    res.status(200).json(person)

} catch (error) {
    
    res.status(500).json({error: error})
}



})

//update - atualização de dados(PUT,PATCH)
router.patch('/:id',async (req,res)=>{
    const id = req.params.id

    const{name,salary,approved}=req.body

    const person ={
        name,
        salary,
        approved,
    }

    try {
        const  updatedPerson= await Person.updateOne({_id:id},person)
res.status(200).json(person)

if (updatePerson.matchedCount == 0) {
    
}
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//deletar dados
router.delete('/:id', async (req,res)=>{

    const id=req.params.id

if (!person) {
        res.status(422).json({message:'o usuario não foi encontrado'})
        return
    }
    const person = await Person.findone({_id:id})
    res.status(200).json(person)

try {
await Person.deleteOne({_id:id})
res.status(200).json({message:'usuario removido com sucesso!'})

    
} catch (error) {
    res.status(500).json({error: error})
}

})

module.exports= router


