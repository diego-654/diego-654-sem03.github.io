
const productos=[
    {
        id:1,
        nombre:'pizza americana',
        precio:25
    },
    {
        id:2,
        nombre:'pizza italiana',
        precio:30
    },
    {
        id:3,
        nombre:'pizza española',
        precio:40
    }
]

let rpt=1;
let carrito=[];
function calcularTotal(){
    var total=0;
    for(var i = 0; i < carrito.length; i++){
        total += carrito[i].precio*carrito[i].cantidad;
    }
    return total;
}
function calcularLista(){
    var lista="";
    for(var i = 0; i < carrito.length; i++){
        lista += carrito[i].nombre+": "+carrito[i].cantidad+" x S/. "+carrito[i].precio+"\n";
    }
    return lista;
}

function agregarProducto(productId,cantidad){
    let producto=productos.find(product=>product.id==productId);
    carrito=[
        ...carrito,
        {
            ...producto,
            cantidad:cantidad
        }
    ]
    console.log(carrito)
    }

while(rpt==1){
    let product=prompt('Seleccione e producto:\n 1=P.americana(S/25)\n 2=P.italiana(S/30)\n 3=P.española(S/40)')

    let cantidad=prompt('Ingrese la cantidad deseada');
    agregarProducto(product,cantidad)
    rpt=prompt('Desea continuar: 1=si otro=no')
    if(rpt!=1){
        console.log(calcularLista());
        console.log('Total:S/. '+calcularTotal());
    }
}