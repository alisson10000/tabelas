const { INTEGER, STRING, DATE } = require('sequelize')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('blog','root','',{
    host:"localhost",
    dialect:"mariadb"
})


//A função abaixo é apenas para verificar se a base de dados está conectada

sequelize.authenticate().then(
    function(){
        console.log("Conexao ok")
    }
).catch(function(erro){
    console.log("Falha de conexão => " + erro)
})

/**
 * Criando uma tabela no meu banco de dadso nome => blog
 */
//Postagem para criar a tabela no banco de dados
const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

// A função abaixo força a criação da tabela postagens

//Postagem.sync({foce:true})


const Ususarios = sequelize.define('usuarios',{
    nomeUsusario:{
        type:Sequelize.STRING
    },
    sobrenomeUsusario:{
        type:STRING
    },
    idadeUsuario:{
        type:INTEGER
    },
    emailUsuario:{
        type:STRING
    },
    nascimentoUsuario:{
        type:DATE
    }
})

// A função abaixo força a criação da tabela postagens

//Ususarios.sync({force:true})

//Método para salvar os dados no banco de dados



Ususarios.create({
    nomeUsusario:"Andre",
    sobrenomeUsusario:"SAntos",
    idadeUsuario:20,
    emailUsuario:"andre@gmail.com",
    nascimentoUsuario:'2003-01-01'
})


//Exercicio os alunos façam o mesmo para a tabela postagens