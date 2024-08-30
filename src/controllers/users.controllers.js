import { Users } from "../models/Users.js"

export const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.findAll()
    res.json(allUsers)
  } catch (error) {
    return res.status(500).json({message:error.message})
  }

}
export const createUsers = async (req, res) => {
 try {
     const { name, email, password_hash, location } = req.body
     const newUsers = await Users.create({
         name,
         email,
         password_hash,
         location,
     })
     res.json(newUsers)
    
 } catch (error) {
    return res.status(500).json({message:error.message})
 }
 

}