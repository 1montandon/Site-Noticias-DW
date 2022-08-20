function remove(){
    document.getElementById(`sidebar`).classList.remove(`active`);
    let elementos = document.getElementsByClassName(`testando`)
    for (const el of elementos) {
        el.classList.add(`xxxxx`);
    }
    let elementos2 = document.getElementsByClassName(`testando2`)
    for (const el of elementos2) {
        el.classList.add(`xxxxx2`);
    }
    let elementos3 = document.getElementsByClassName(`testando3`)
    for (const el of elementos3) {
        el.classList.add(`xxxxx3`);
    }
} 

function show(){
    document.getElementById(`sidebar`).classList.add(`active`);

    let elementos = document.getElementsByClassName(`testando`)
    for (const el of elementos) {
        el.classList.remove(`xxxxx`);
    }
    let elementos2 = document.getElementsByClassName(`testando2`)
    for (const el of elementos2) {
        el.classList.remove(`xxxxx2`);
    }
    let elementos3 = document.getElementsByClassName(`testando3`)
    for (const el of elementos3) {
        el.classList.remove(`xxxxx3`);
    }
   
   
   

}


