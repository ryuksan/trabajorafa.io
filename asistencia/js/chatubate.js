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