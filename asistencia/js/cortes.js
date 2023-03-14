function cortes() {
  let creditosPagina = 0;
  let array = [];
  //creacion de variable para filter en creditosPagina
  const busqueda = "000000794";
  //creacion de expression regular para hacer el filter
  let regex = new RegExp(`.*${busqueda}.*$`, "gm");
  creditosPagina = document.getElementById("adults").value;
  array = creditosPagina.match(regex);
  let array2 = [];
  let divisionDeString = [];
  let eliminarDatos1_2 = [];
  let eliminarDatos2_2 = [];
  let array2AObjeto = [];
  //creacion de doble arreglo para el correcto almacenamiento del split
  for (let i of array) {
    array2.push([i]);
  }
  // implementation del split con doble for para llegar a el segundo array
  for (let m of array2) {
    for (let x of m) {
      divisionDeString.push(x.split("\t"));
    }
  }
  // // elimminacion de datos imnecesarios despues de la division de string
  // for (let y of divisionDeString) {
  //   y.splice(1, 2);
  //   eliminarDatos1_2.push(y);
  // }
  // for (let z of eliminarDatos1_2) {
  //   z.splice(2, 2);
  //   eliminarDatos2_2.push(z);
  // }
  // //pasar el segundo array a objeto con Object.assign
  // for (let a of eliminarDatos2_2) {
  //   ac1 = Object.assign({
  //     id: a[2],
  //     fecha: a[0],
  //     creditos: parseFloat(a[1] * -1),
  //   });
  //   array2AObjeto.push(ac1);
  // }
  // // pasando el primer array a objeto
  // const objetoCortes = array2AObjeto.reduce((acc, item) => {
  //   acc[item.id] = item;
  //   return acc;
  // }, {});

  //como sumar los creditos almacenados en cada corte a la propiedad creditosPagina o ver como sumar todo en fin solucionar

  /*let propiedades = {
    creditosPagina: objetoCortes + cortes.corte_1.creditos + cortes.corte_2.creditos + cortes.corte_3.creditos + cortes.corte_4.creditos + cortes.corte_5.creditos + cortes.corte_6.creditos + cortes.corte_7.creditos + cortes.corte_8.creditos + cortes.corte_9.creditos,
    moneda: window.moneda,
    descuentoPagina: 0.70044843,
	descuentoStudio: 0.8}

  	propiedades.creditosPagina *= propiedades.descuentoPagina;
	propiedades.creditosPagina *= propiedades.descuentoStudio;
	propiedades.creditosPagina *= propiedades.moneda;
	 

	document.getElementById('resultadoPagina').innerHTML = propiedades.creditosPagina.toFixed(2);*/
  document.getElementById("revicion").innerHTML = divisionDeString;
  console.log(divisionDeString);
}