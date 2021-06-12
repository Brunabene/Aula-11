
let url = " https://backend-progweb-bruna.herokuapp.com/"

async function callFetchWithPost(produto, cor, tamanho){
    const option ={
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'nome' : nome,
            'cor': cor,
            'tamanho': tamanho
        })
    }
    await fetch (url,options);
}
function submitPost(){
    console.log("entrei na função");

    const form = document.forms['postForm'];    
    const produto = form["nome"].value;
    callFetchWithPost(nome);
    const produto = form["cor"].value;
    callFetchWithPost(cor);
    const produto = form["tamanho"].value;
    callFetchWithPost(tamanho);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.}
}