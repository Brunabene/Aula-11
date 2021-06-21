
let url = " https://atividade7-brunaelziele.herokuapp.com/database"
// let urlput =" https://atividade7-brunaelziele.herokuapp.com/atualizar"
// let urldelete =" https://atividade7-brunaelziele.herokuapp.com/deletar"


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
     await fetch (url,options);
}
    async function callFetchWithPut(id, nome2,autor2){
        const options = {
            method : 'PUT',
            mode: 'cors',
            headers: {
                'Accept' : 'application/json',
                'content-type' : 'application/json'            
            }, 
            body :JSON.stringify({
                banco_dados:{
                    'nome': nome2,
                    'autor': autor2
                }
            })
        }
        await fetch(`${url}/${id}`, options);

 }
 async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
     await fetch(`${url}/${id}`, options);
       
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
    const nome2 = form["nome2"].value;
    const autor2 = form["autor2"].value;
    callFetchWithPut(id, nome2,autor2);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id2 = form["id2"].value;  
    callFetchWithDelete(id2);
    return false; // Evitar o reload da tela.}
}