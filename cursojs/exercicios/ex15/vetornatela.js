let valores = [5,4,9,3,2,7]
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} contém o valor ${valores[pos]}`)
}
