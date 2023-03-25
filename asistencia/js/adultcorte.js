function adultwork() {
  let corteAdult = [];
  let array = [];
  let array2 = [];
  let divisionDeString = [];
  let eliminarDatos1_2 = [];
  let eliminarDatos2_2 = [];
  let eliminarDatos3_3 = [];
  let array2AObjeto = [];
  // pruevas
   let arrays = [];
   //creacion de variable para filter en creditosPagina
   const busqueda = "Cosmo Payment	000000794";
   //creacion de expression regular para hacer el filter
   let regex = new RegExp(`.*${busqueda}.*$`, "gm");
   corteAdult = document.getElementById("adults").value;
   arrays = corteAdult.match(regex);
//creacion de doble array
   for (let x of arrays){
    array2.push([x]);
   };
   // division del string en arreglos
   for (let m of array2) {
    for (let x of m) {
      divisionDeString.push(x.split("\t"));
    }
  }
  //eliminacion de datos inservibles
  for (let t of divisionDeString) {
    t.splice(0,2);
    eliminarDatos1_2.push(t);
  }
  //eliminacion de datos inservibles
  for (let t of eliminarDatos1_2) {
    t.splice(2,2)
    eliminarDatos2_2.push(t)
  }
  // eliminacion de datos inservibles
  for (let t of eliminarDatos2_2) {
    t.splice(3,3)
    eliminarDatos3_3.push(t)
  }
   //pasar el segundo array a objeto con Object.assign
  for (let a of eliminarDatos2_2) {
    ac1 = Object.assign({
      user: a[0],
      fecha: a[1],
      creditos: parseFloat(a[2]),
    });
    array2AObjeto.push(ac1);
  }
  //convirtiendo un array de objetos en una lista 
  let foo = array2AObjeto.map(function (bar) {
    return "<li>" + bar.user + " " + bar.fecha + " " + bar.creditos + "</li>";
  });
  //muestra de datos en div
  document.getElementById("revision_adultwork").innerHTML = foo;
  //solo para revicion
  console.log(foo);
}
//creacion de funcion para parcial 
  function parcial() {
    let parcialAdult = [];
    // pruevas
     let arrays2 = [];
     let arrayofarray = [];
     let divisionDeString = [];
     //creacion de variable para filter en creditosPagina
     const busqueda = "0	0";
     //creacion de expression regular para hacer el filter
     let regex = new RegExp(`.*${busqueda}.*$`, "gm");
     parcialAdult = document.getElementById("adults").value;
     arrays2 = parcialAdult.match(regex);
     for (let x of arrays2){
      arrayofarray.push([x]);
     };
     for (let m of arrayofarray) {
      for (let x of m) {
        divisionDeString.push(x.split(" "));
      }
    }
     for (let z of divisionDeString){
      
        z = z.filter((i) => i !== "Performs");
      
     }
     document.getElementById("revision_adultwork").innerHTML = divisionDeString;
     console.log(divisionDeString);
}