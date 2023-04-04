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