for(let i = 1 ; i <=50; i++) {

    //aqui eu verifico se o numero é impar,todo numero que dividido por 2 e sobrar um resto diferente de 0 é impar
    
    if(i%2 !=0){
        document.querySelector("#contagem").innerHTML += i + " ";
    }
}