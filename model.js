const Sequelize = require('sequelize')

const sequelize = new Sequelize('banco','root','',{
    host:"localhost",
    dialect:"mariadb"
})

/*
A função abaixo é apenas para verificar se a base de dados está conectada

sequelize.authenticate().then(
    function(){
        console.log("Conexao ok")
    }
).catch(function(erro){
    console.log("Falha de conexão => " + erro)
})**/