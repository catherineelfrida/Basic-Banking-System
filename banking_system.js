function tambahSaldo() {
  const  amount = parseInt(prompt("Masukkan jumlah saldo yang ingin ditambahkan", 0), 10);
  bankAccount.deposit(amount);
}

function kurangiSaldo() {
  const amount = prompt("Masukkan jumlah saldo yang ingin dikurangi", 0);
  bankAccount.withdraw(amount);
}

bankAccount.tampilkanSaldo();
