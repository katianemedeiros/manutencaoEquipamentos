function cadastrar () {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var marca = document.getElementById('marca').value;
    var problema = document.getElementById('problema').value;
    var tipo = document.getElementById("tipo").value;

    var rads = document.getElementsByName("status");
   
    for(var i = 0; i < rads.length; i++){
     if(rads[i].checked){
        var status = rads[i].value;
     }
    }

    var novaOrdem = {	
        "nome": nome,
        "cpf": cpf,
        "email":email,
        "endereco":endereco,
        "marca":marca,
        "problema": problema,
        "status": status,
        "telefone": telefone,
        "tipo":tipo 

        // "nome": "Katiane",
        // "cpf": "099.611.989-21",
        // "email": "teste@gmail.com",
        // "endereco": "rua teste",
        // "telefone": "(48)999759814",
        // "marca": "LG",
        // "tipo": "computador",
        // "problema": "tela quebrada",
        // "status": true
    }

    $.ajax({
    type: "POST",
    url: 'http://localhost:8080/ordens/',
    contentType: 'application/json',
    data: JSON.stringify(novaOrdem),
    sucess: function (data){
        alert('Sucess');
        console.log(data)
    },
    error: function () {
        alert('Error');
    }
    });
    
    // console.log(nome)
    // console.log(cpf)
    // console.log(telefone)
    // console.log(email)
    // console.log(endereco)
    // console.log(marca)
    // console.log(problema)
    // console.log(status)
    // console.log(tipo)
}