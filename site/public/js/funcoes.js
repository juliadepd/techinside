// sessão
function validarSessao() {
    // aguardar();

    var nomeUsuario = sessionStorage.NOME_USUARIO;

    var idEmpresa = sessionStorage.ID_EMPRESA;
    var idUsuario = sessionStorage.ID_USUARIO


    if (idEmpresa == null || nomeUsuario == null && idUsuario == null) {
        window.location = "/login.html";
    } 
}

function validarSessaoUPDATE(){
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;

    if(nome == null && email == null){
        window.location = "/novaSenha.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    window.location = "/login.html";
}

function limparSessaoUPDATE(){
    sessionStorage.clear();
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

