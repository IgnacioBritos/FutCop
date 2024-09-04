
import { Users } from "../models/Users.js"
import bcryptjs from "bcryptjs"
export const createUsers = async (req, res) => {
    try {
        const { name, email, password, location } = req.body
        const password_hash = await bcryptjs.hash(password,8)
        const newUsers = await Users.create({
            name,
            email,
            password_hash,
            location,
        })
        res.json(newUsers)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req,res)=>{
    try {
        const { email , password }= req.body
        const user = await Users.findOne({
            where: {
                email: email
            }
        });
    
        if (!user) {
            return res.status(404).json({message:" User not found"})
        }
        const passwordValid = await bcryptjs.compare(password, user.password_hash)
        if (!passwordValid) {
            return  res.status(401).json({message:"Invalid Password"})
        }
        res.json({message:"Login successful",user})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const getUsers = async (req, res) => {
    try {
        const allUsers = await Users.findAll()
        res.json(allUsers)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }res.json
}

export const getUser= async(req,res)=>{
    try {
        const {id}= req.params
        const user = await Users.findOne({
            where:{
                id 
            }
        })
        res.json(user)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const updateUsers = async (req,res)=>{
 try {
    const {id}= req.params
    const { name, email, password_hash, location } = req.body
    
    const user = await Users.findByPk(id);

    user.name=name;
    user.password_hash=password_hash
    user.location=location

    await user.save()
    res.json(user)

 } catch (error) {
    return res.status(500).json({ message: error.message })
 }
}

export const deleteUser= async (req,res)=>{
    try {
        const { id } = req.params
        await Users.destroy({
            where:{
                id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
