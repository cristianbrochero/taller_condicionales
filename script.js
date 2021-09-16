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
