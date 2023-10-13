-- Tabel Nasabah
CREATE TABLE nasabah (
  id BIGSERIAL PRIMARY KEY,
  nama VARCHAR(255),
  alamat VARCHAR(255)
);

-- Tabel Akun
CREATE TABLE akun (
  id BIGSERIAL PRIMARY KEY,
  nasabah_id BIGSERIAL REFERENCES nasabah(id),
  jenis VARCHAR(50),
  saldo DECIMAL(10, 2)
);

-- Tabel Transaksi
CREATE TABLE transaksi (
  id BIGSERIAL PRIMARY KEY,
  akun_id BIGSERIAL REFERENCES akun(id),
  jenis VARCHAR(50),
  jumlah DECIMAL(10, 2)
);

-- Operasi Create data ke tabel Nasabah
INSERT INTO nasabah (nama, alamat) VALUES
  ('Diaz', 'Jl. Nasabah 1'),
  ('Theo', 'Jl. Nasabah 2'),
  ('Christine', 'Jl. Nasabah 3');

-- Operasi Create data ke tabel Akun
INSERT INTO akun (nasabah_id, jenis, saldo) VALUES
  (1, 'Tabungan', 1000.00),
  (1, 'Giro', 500.00),
  (2, 'Tabungan', 1500.00),
  (3, 'Tabungan', 2000.00);

-- Operasi Create data ke tabel Transaksi
INSERT INTO transaksi (akun_id, jenis, jumlah) VALUES
  (1, 'Setor', 500.00),
  (1, 'Tarik', 200.00),
  (2, 'Setor', 300.00),
  (3, 'Setor', 1000.00);

-- Operasi Read di tabel nasabah
SELECT * FROM nasabah;

-- Operasi Read di tabel akun
SELECT * FROM akun;

-- Operasi Read di tabel transaksi
SELECT * FROM transaksi;

-- Operasi Update
UPDATE akun SET saldo = 1500.00 WHERE id = 1;

-- Operasi Delete
DELETE FROM transaksi WHERE id = 1;
