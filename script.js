let a = 0;
function maisCarrinho(){
    a++;
    document.getElementById("quantidade").innerHTML =
    `
    <p>${a}</p>
    `
}


function menosCarrinho(){
    if (a > 0){
        a--;
        document.getElementById("quantidade").innerHTML =
         `
         <p>${a}</p>
         `

         
    }
}