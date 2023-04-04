function corteStream() {
  let corteStreamate = [];
  let divisionStream = [];
  let divisionMate = [];
  let division3 = [];

  corteStreamate.push(document.getElementById("stream").value);
  for (let e of corteStreamate){
    divisionStream.push(e.split('\n  '));
  }
  for (let g of divisionStream){
    for (let h of g){
      divisionMate.push(h.split('\n'));
    }
  }
  
  document.getElementById("t").innerHTML = division3;
  console.log(division3);
}
