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
      break;
  }

  document.getElementById("tempatHasil").innerHTML = "total biayanya adalah Rp"+biaya;
}

function blueCounter(jarak) {
  jarak = jarak * 1000;

  meter = 0;
  totalBiaya = 0;

  while (meter <= jarak) {
    if (meter <= 100) {
      totalBiaya = 100;
    }
    if (meter > 100 && meter <= 500) {
      totalBiaya = totalBiaya + 50;
    }
    if (meter > 500) {
      totalBiaya = totalBiaya + 10;
    }

    meter = meter + 100;
  }

  return totalBiaya;
}

function silverCounter(jarak) {
    jarak = jarak * 1000;
  
    meter = 0;
    totalBiaya = 0;
  
    while (meter <= jarak) {
      if (meter <= 250) {
        totalBiaya = 100;
      }
      if (meter > 250 && meter <= 1000) {
        totalBiaya = totalBiaya + 75;
      }
      if (meter > 1000) {
        totalBiaya = totalBiaya + 25;
      }
  
      meter = meter + 250;
    }
  
    return totalBiaya;
  }