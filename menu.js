function remove(){
    document.getElementById(`sidebar`).classList.remove(`active`);
    let elementos = document.getElementsByClassName(`testando`)
    for (const el of elementos) {
        el.classList.add(`xxxxx`);
    }
    
} 

function show(){
    document.getElementById(`sidebar`).classList.add(`active`);

    let elementos = document.getElementsByClassName(`testando`)
    for (const el of elementos) {
        el.classList.remove(`xxxxx`);
    }
   

}


