
let url = " https://atividade7-brunaelziele.herokuapp.com/adicionar"

async function callFetchWithPost(nome, autor){
    const options ={
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'nome' : nome,
            'autor': autor
            
        })
    }
     fetch (url,options)
    .then(async(res)=>{console.log(await res.text())})
    .catch ((e) => {console.log(e.message)})
}
function submitPost(){
    console.log("entrei na função");

    const form = document.forms['postForm'];    
    const nome = form["nome"].value;
    const autor = form["autor"].value;
    callFetchWithPost(nome,autor);
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