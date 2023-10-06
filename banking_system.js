const bankAccount = require("./bank_account.js");

function tambahSaldo() {
  const  amount = parseInt(prompt("Masukkan jumlah saldo yang ingin ditambahkan", 0));
  bankAccount.deposit(amount);
}

function kurangiSaldo() {
  const amount = parseInt(prompt("Masukkan jumlah saldo yang ingin dikurangi", 0));
  bankAccount.withdraw(amount);
}

