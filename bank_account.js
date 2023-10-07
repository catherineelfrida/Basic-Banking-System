class BankAccount {
  constructor(saldoAwal = 5000) {
    this.saldo = saldoAwal;
  }

  deposit(amount) {    
    if (!isNaN(amount) && amount > 0) {
      this.saldo += amount;
      this.tampilkanSaldo();
    } else {
      alert("Jumlah yang dimasukkan tidak valid.");
    }
  }

  withdraw(amount) {
    if (!isNaN(amount) && amount > 0) {
      if (amount <= this.saldo) {
        this.saldo -= amount;
        this.tampilkanSaldo();
      } else {
        alert("Saldo tidak mencukupi.");
      }
    } else {
      alert("Jumlah yang dimasukkan tidak valid.");
    }
  }

  tampilkanSaldo() {
    document.getElementById("demo").innerHTML = "Saldo pada saat ini: " + this.saldo;
  }
}

const bankAccount = new BankAccount();
