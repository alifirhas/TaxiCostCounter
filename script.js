function count() {
  var jenisTaksi = document.getElementById("jenisTaksi");
  var pilihTaksi = jenisTaksi.options[jenisTaksi.selectedIndex].text;
  var jarak = document.getElementById("jarak").value;
  var biaya;

  switch (pilihTaksi) {
    case "biru":
      biaya = blueCounter(jarak);
      break;

    case "silver":
      biaya = silverCounter(jarak);
      break;

    default:
      biaya = "pilih taxi dulu";
      break;
  }
  var text = "";
  text += "Dengan taksi " + pilihTaksi + " <br>";
  text += "Biaya menempuh jarak " + jarak + " KM <br>";
  text += "total biayanya yang harus dibayarkan adalah Rp " + biaya;
  document.getElementById("tempatHasil").innerHTML = text;
}

function blueCounter(distance) {
  distance = distance * 1000;
  let totalCost = 0;
  if (distance > 500) {
    totalCost += (distance - 500) * 10;
    distance = 500;
  }
  if (distance > 100) {
    totalCost += (distance - 100) * 50;
    distance = 100;
  }
  if(distance>0)
   totalCost += distance * 100;

  return totalCost;
}

function silverCounter(distance) {
  distance = distance * 1000;
  let totalCost = 0;
  if (distance > 1000) {
    totalCost += (distance - 1000) * 25;
    distance = 1000;
  }
  if (distance > 250) {
    totalCost += (distance - 100) * 75;
    distance = 100;
  }
  if(distance>0)
   totalCost += distance * 100;

  return totalCost;
}