function adultwork() {
  let corteAdult = [];
  let array = [];
  let array2 = [];
  let divisionDeString = [];
  let eliminarDatos1_2 = [];
  let eliminarDatos2_2 = [];
  let array2AObjeto = [];
  corteAdult.push(document.getElementById("adults").value);
  for (let x of corteAdult) {
    array.push(x.split("\n"));
  }
  // implementation del split con doble for para llegar a el segundo array
  for (let m of array) {
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
  /*for (let a of eliminarDatos2_2) {
    ac1 = Object.assign({
      id: a[2],
      fecha: a[0],
      creditos: parseFloat(a[1] * -1),
    });
    array2AObjeto.push(ac1);
  }*/
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
  document.getElementById("revision_adultwork").innerHTML = divisionDeString;
  console.log(divisionDeString);
}

function corteChat() {
  let corteChaturbate = [];
  let divisionChat = [];
  let divisionInterna = [];
  let objChat = {};
  let arrayObjt = [];
  let objt_objt;
  corteChaturbate.push(document.getElementById("c").value);

  for (let i of corteChaturbate) {
    divisionChat.push(i.split("\n"));
  }
  for (let a of divisionChat) {
    for (let b of a) {
      divisionInterna.push(b.split(" "));
    }
  }
  for (let c of divisionInterna) {
    objChat = Object.assign({
      user: c[0],
      coins: c[1],
      valor: c[2],
    });
    arrayObjt.push(objChat);
  }
  // objt_objt= arrayObjt.reduce((ac, x) => {
  //   ac[x.user] = x;
  //   return ac;
  // }, {});
  let foo = arrayObjt.map(function (bar) {
    return "<li>" + bar.user + " " + bar.coins + " " + bar.valor + "</li>";
  });

  document.getElementById("r").innerHTML = foo;
  console.log(foo);
}

function corteStrip() {
  let corteStripchat = [];
  let divisionStrip = [];

  corteStripchat.push(document.getElementById("strip").value);
  for (let z of corteStripchat) {
    divisionStrip.push(z.split("\n"));
  }

  document.getElementById("s").innerHTML = divisionStrip;
  console.log(divisionStrip);
}

function corteStream() {
  let corte;
  let corteStreamate = [];
  let divisionStream = [];
  let divisionMate = [];
  // //creacion de variable para filter en creditosPagina
  // const busqueda = "Earnings for";
  // //creacion de expression regular para hacer el filter
  // let regex = new RegExp(`.*${busqueda}.*$`, "gm");
  // corte = document.getElementById("stream").value;
  // corteStreamate = corte.match(regex);

  corteStreamate.push(document.getElementById("stream").value);
  for (let e of corteStreamate){
    divisionStream.push(e.split('\n  '));
  }
  for (let g of divisionStream){
    for (let h of g){
      divisionMate.push(h.split('\n'));
    }
  }

  document.getElementById("t").innerHTML = divisionMate;
  console.log(divisionMate);
}

/*let creditosPagina = 0;
  let array = [];
  //creacion de variable para filter en creditosPagina
  const busqueda = "Cosmo Payment - 000000794";
  //creacion de expression regular para hacer el filter
  let regex = new RegExp(`.*${busqueda}.*$`, "gm");
  creditosPagina = document.getElementById("creditosPagina").value;
  array = creditosPagina.match(regex);*/
