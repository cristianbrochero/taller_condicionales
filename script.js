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

    // 3 ejercicio
    Ejer3 = (fianza) => {
        if(fianza < 50000){
            let cuota = (fianza * 0.03)
            let total = (cuota + fianza);
            return `El valor a cancelar es de: $${cuota}
            \n El valor a cancelar del cliente es: $${total_}`;
        }else{
            let cuota = (fianza * 0.02)
            let total = (cuota + fianza);
            return `La cuota a pagar es de: $${cuota}
            \n El valor a pagar al cliente es de: $${total}`;
        }
    }
    console.log(Ejer3(70000));

    // 4ejercicio
    
    Ejer4 = (p_l,p_m,p_mi,p_j,p_v,g_l,g_m,g_mi,g_j,g_v) => {

        let prom = (p_l + p_m + p_mi + p_j + p_v) / 5
        let g = (g_l + g_m + g_mi + g_j + g_v)

        if(prom > 170){
            let sancion = (g * 0.5);
            let multa = (g - sancion);
            return `Los puntos promedios son ${prom}\n
                Promedio mayor a 170, Parar la produccion.\n
                Gaancia total: $${g}\n 
                Multa: $${multa}`;
        }else{
            return `No tendra ni sancion ni multa\n
             Ganacia total: $${g}`
        }
    }
    console.log(Ejer4(100,250,100,500,450,10000,15000,20000,25000,30000));