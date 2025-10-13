const {bcrypt} = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const register = async (req, res) => {
  const {username, password} = req.body;

try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({

    data :{
        user : username,
        password : hashedPassword
    }
  })
  res.status(201).json({
    message: 'User registered successfully', 
    userId: user.id
});
    
} catch (error) {
    res.status(500).json({
        error : 'Intertnal server error',
        details : error.message
    })   
}};


module.exports = {register};
