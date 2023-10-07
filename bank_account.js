class BankAccount {
  constructor(saldoAwal = 5000) {
    this.saldo = saldoAwal;
  }

  async deposit(amount) {    
    if (!isNaN(amount) && amount > 0) {
      await new Promise(resolve => {
        setTimeout(() => {
          this.saldo += amount;
          this.tampilkanSaldo();
          resolve();
        }, 3000);
      })
    } else {
    alert("Jumlah yang dimasukkan tidak valid.");
    }
  }

  async withdraw(amount) {
    if (!isNaN(amount) && amount > 0) {
      await new Promise((resolve) => {
        setTimeout(() => {
          if (amount <= this.saldo) {
            this.saldo -= amount;
            this.tampilkanSaldo();
          } else {
            alert("Saldo tidak mencukupi.");
          }
          resolve()
        }, 3000);
      })
    } else {
      alert("Jumlah yang dimasukkan tidak valid.");
    }
  }

  tampilkanSaldo() {
    document.getElementById("demo").innerHTML = "Saldo pada saat ini: " + this.saldo;
  }
}

const bankAccount = new BankAccount();
