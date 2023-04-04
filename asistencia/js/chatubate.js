function corteChat() {
  let corteChaturbate = [];
  let divisionChat = [];
  let divisionInterna = [];
  let objChat = {};
  let arrayObjt = [];
  corteChaturbate.push(document.getElementById("c").value);
// dividiendo el array en un array de un string
  for (let i of corteChaturbate) {
    divisionChat.push(i.split("\n"));
  }
  // dividiendo los array en 3 partes user, coins, valor
  for (let a of divisionChat) {
    for (let b of a) {
      divisionInterna.push(b.split("\t"));
    }
  }
  // creacion de objeto para mejor visualizacion y mejor paso de datos
  for (let c of divisionInterna) {
    objChat = Object.assign({
      user: c[0],
      coins: c[1],
      valor: c[2],
    });
    arrayObjt.push(objChat);
  }
// creacion de tabla de muestra de resultados
  let crearTabla = function(arrayObjt) {
    let stringTabla = "<tr><th>User</th><th>Coins</th><th>Valor</th></tr>";
    for (let object of arrayObjt) {
      let fila = "<tr>";

      fila += "<td>";
      fila += object.user;
      fila += "</td>";
      
      fila += "<td>";
      fila += object.coins;
      fila += "</td>";
      
      fila += "<td>";
      fila += object.valor;
      fila += "</td>";

      fila += "</tr>";

      stringTabla += fila;      
    }
    return stringTabla;
  }

  document.getElementById("r").innerHTML = crearTabla(arrayObjt);
  console.log(crearTabla(arrayObjt));
}
//funciona correctamente.