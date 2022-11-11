let nol = document.querySelector('.null');
let inc = document.querySelector('.but-1');
let dic = document.querySelector('.but-2');
let res = document.querySelector('.reset');

let value = 0;

const incValue = (a) =>{
    return a + 1;
}
const dicValue = (a) =>{
    return a - 1;
}



inc.addEventListener('click',() =>{
    nol.innerHTML = incValue(value);
    value = incValue(value);
} )
 

dic.addEventListener('click', () =>{
    if(value > 0){  
        nol.innerHTML = dicValue(value);
        value = dicValue(value);
    }else{
        nol.innerHTML = 0;
        value = 0;
    }

} )

res.addEventListener('click', () =>{
    nol.innerHTML = 0;
    value = 0;

} )
