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
  /*let foo = array2AObjeto.map(function (bar) {
    return "<li><b>" + bar.fecha +  " <b>-</b> " + bar.user + "    $" + bar.creditos + "</b></li>";
  });*/
  //creacion de tabla
  let crearTabla = function(array2AObjeto) {
    let stringTabla = "<tr><th>Fecha</th><th>User</th><th>Creditos</th></tr>";
    for (let object of array2AObjeto) {
      let fila = "<tr>";

      fila += "<td>";
      fila += object.fecha;
      fila += "</td>";

      fila += "<td>";
      fila += object.user;
      fila += "</td>";
      
      fila += "<td>";
      fila += object.creditos;
      fila += "</td>";

      fila += "</tr>";

      stringTabla += fila;      
    }
    return stringTabla;
  }

  //muestra de datos en div
  document.getElementById("revision_adultwork").innerHTML = crearTabla(array2AObjeto);
  //solo para revicion
  console.log(crearTabla(array2AObjeto));
  
}



//creacion de funcion para parcial 
  function parcial() {
    let parcialAdult = [];
    // pruevas
     let arrays2 = [];
     let arrayofarray = [];
     let divisionDeString = [];
     let divisionDeString2 = [];
     let divisionDeString3 = [];
     let limpieza = [];
     let final = [];
     let arrayobjeto = [];
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
        divisionDeString.push(x.split(/\t/));
      }
    }
    for (let f of divisionDeString){
      divisionDeString2.push(f.splice(1, 7))
    }
    for (let r of divisionDeString){
      divisionDeString3.push(r.splice(2,3))
    }
    for (let t of divisionDeString){
      for (let o of t){
        limpieza.push(o.split(" "));
      }
    }
    for (let q of limpieza){
      if (q.length >= 8){
        final.push(q.splice(1, 30));
      }
    }
    for (let i = 0; i < limpieza.length; i += 2){
      const user = limpieza[i][0];
      const creditos = limpieza[i+1][0];
      arrayobjeto.push({ user: user, creditos: creditos });
    }
// creacion de tabla para mostrar elementos
    let crearTabla = function(arrayobjeto) {
      let stringTabla = "<tr><th>User</th><th>Creditos</th></tr>";
      for (let object of arrayobjeto) {
        let fila = "<tr>";
  
        fila += "<td>";
        fila += object.user;
        fila += "</td>";
        
        fila += "<td>";
        fila += object.creditos;
        fila += "</td>";
  
        fila += "</tr>";
  
        stringTabla += fila;      
      }
      return stringTabla;
    }
    
     document.getElementById("revision_adultwork").innerHTML = crearTabla(arrayobjeto);
     console.log(crearTabla(arrayobjeto));
}