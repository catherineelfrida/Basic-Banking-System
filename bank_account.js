let saldo = 5000

function tambahSaldo() {
  let input = prompt("Masukkan jumlah saldo yang ingin ditambahkan", 0);
  saldo = +saldo + +input
  // document.getElementById("demo").innerHTML +=
  // "<br>" + "Saldo pada saat ini: " + saldo ;
  document.getElementById("demo").innerHTML =
  "Saldo pada saat ini: " + saldo ;
}

function kurangiSaldo() {
  let input = prompt("Masukkan jumlah saldo yang ingin dikurangi", 0);
  saldo = +saldo + +input
  // document.getElementById("demo").innerHTML +=
  // "<br>" + "Saldo pada saat ini: " + saldo ;
  document.getElementById("demo").innerHTML =
  "Saldo pada saat ini: " + saldo ;
}