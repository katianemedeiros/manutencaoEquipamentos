function listar () {
    
    $.ajax({
    type: "GET",
    url: 'http://localhost:8080/ordens',
    success: function(result){
        console.log(result)
        for(var i=0;result.length>i;i++){
            if (result[i].status == true) {
                var status = "Finalizada"
            } else {
                var status = "Pendente"
            }
            //Adicionando registros retornados na tabela
            $('#listar').append('<tr><td>'+result[i].id +'</td><td>' + result[i].nome +'</td><td>' +
            result[i].cpf + '</td><td>' + result[i].email +'</td><td>' + result[i].endereco +'</td><td>'
            + result[i].telefone +'</td><td>' + result[i].marca +'</td><td>' + result[i].tipo +'</td><td>'
            + result[i].problema +'</td><td>' + status+'</td>'
            );
        }
    }
    });
}

function listarOrdens () {
    
    $.ajax({
    type: "GET",
    url: 'http://localhost:8080/ordens',
    success: function(result){
        console.log(result)
        for(var i=0;result.length>i;i++){
            if (result[i].status == true) {
                var status = "Finalizada"
            } else {
                var status = "Pendente"
            }
            //Adicionando registros retornados na tabela
            $('#listar').append('<tr><td>'+result[i].id +'</td><td>' +
            result[i].cpf + '</td><td>' 
            +  result[i].marca +'</td><td>' + result[i].tipo +'</td><td>'
            + result[i].problema +'</td><td>' + status+'</td>'
            );
        }
    }
    });
        
    
}

