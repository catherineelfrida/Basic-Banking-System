const { PrismaClient } = require('@prisma/client')

const prismadb = new PrismaClient()

module.exports = {
  async get(req, res) {
    const result = await prismadb.customer.findMany()
    
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success!",
      data: result
    })
  },
  async getById(req, res) {
    const { id } = req.params

    const result = await prismadb.customer.findUnique({
      where: { id: parseInt(id) }
    })
    
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success!",
      data: result
    })
  },
  async create(req, res) {
    try {
      const { nama, alamat } = req.body
      
      // Validasi input
      if (!nama || !alamat) {
        return res.status(400).json({ error: 'Data yang diberikan tidak valid.' })
      }

      // Tambahkan nasabah baru
      const newCustomer = await prismadb.customer.create({
        data: {
          nama,
          alamat
        }
      })
      
      return res.status(201).json({
        status: "success",
        code: 201,
        message: "Success add new customer!",
        data: newCustomer
      })
    } catch (error) {
      console.error('Error:', error)
      res.status(500).json({ error: 'Terjadi kesalahan server.' })
    }
  }
}
