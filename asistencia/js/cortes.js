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
