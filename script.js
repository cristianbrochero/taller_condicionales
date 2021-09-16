// 1 Ejercicio
let Ejer1 = (num_camisas,pre_camisas)=>{

    let subt = num_camisas * pre_camisas;
if(num_camisas >= 3){
        desc = subt * 0.30;
        tot = subt - desc
}else{
       desc = subt * 0.10;
        tot = subt - desc;
}
return `El valor es: ${tot}`;
} 
console.log(Ejer1(3,3000));

// 2 ejercicio

let Ejer2 = (valor_com,num_escogido)=>{

    if(num_escogido >= 74){
            desc = valor_com * 0.20;
            tot = valor_com - desc;

    }else{  desc = valor_com * 0.15;
            tot = valor_com - desc;
         }
    return `El valor total de la compra con descuento: ${tot}
        \nDinero descontado: ${desc} `;
    } 
    console.log(Ejer2(8000,72));
    
