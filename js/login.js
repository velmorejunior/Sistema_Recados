const formConta = document.querySelector("#login");
const formLogin = document.getElementById('login');

function entrarNoSistema(){
    const contas = JSON.parse(localStorage.getItem("contas")) ?? [];  
    const inputUsuario = document.getElementById('username').value 
    const inputSenha = document.getElementById('password').value  
    const usuarioDB = contas.find((usuario) => usuario.username === inputUsuario && usuario.password === inputSenha)       
    
    if(!usuarioDB){
        alert("Usuário nao cadastrado ou senha inválida")
        formLogin.reset();        
    }

    sessionStorage.setItem("usuarioAtual", JSON.stringify(usuarioDB.username))
   
   location.href='home.html'
   
}







































// const bancoDeDados = [
//     {
//         username: 'velmore',
//         password: '123456'
//     },
//     {
//         username: 'edson',
//         password: '654321'
//     },
// ];








