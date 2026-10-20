const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function (event) {

    event.preventDefault ();


    const usuario = document.getElementById("usuario").value;
    const semha = document.getElementById("senha").value;

    const usuarioCorreto = "aluno";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        alert("Login realizado com sucesso!");  

    } else {

        alert("Usuario ou senha incorretas!");
    }

});