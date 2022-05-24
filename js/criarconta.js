const formConta = document.querySelector("#criaConta");

function criarConta(){  

    const contas = recuperaConta();
    const usuario = formConta.username.value;
    let usuarioJaExiste = false;
    contas.forEach((conta)=> {
        if(conta.username === usuario){
            alert("Usuário já existe.")
            usuarioJaExiste =true;
            return;
        }
    })
    if(usuarioJaExiste === false){
      if (testaSenha(formConta.password.value, formConta['newpassword'].value) == true){
            salvaConta();
        } else{
            alert("As senhas não conferem");
        }
    }
}

function testaSenha(senha, senhaConfirma){
    if(senha === senhaConfirma){
        return true;
    }else{
        return false;
    }
}

function recuperaConta(){
    const contas = JSON.parse(localStorage.getItem("contas")) ?? [];
    return contas;
}

function salvaConta() {  
    const username = formConta.username.value;
    const password = formConta.password.value;
    const newpassword = formConta.newpassword.value;
    const novaConta = {
        username: username,
        password: password,
        newpassword: newpassword,
    };
    gravarNaStorage(novaConta);
    location.href = './index.html'
}

function gravarNaStorage(conta){
  const lista = recuperaConta()
  lista.push(conta)
  localStorage.setItem("contas",JSON.stringify(lista));
  
}


