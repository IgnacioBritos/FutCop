import { Reservation } from "../models/Reservations.js"


export const createReservation = async (req, res) => {
    try {
        const { user_id, date, time, number_of_players, location, description, start_date,
            end_date } = req.body
        const newReservation = await Reservation.create({
            start_date,
            end_date,
            date,
            time,
            number_of_players,
            location,
            description,
            user_id,

        })
        res.json(newReservation)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const getReservation = async (req, res) => {
    try {
        const allReservation = await Reservation.findAll()
        res.json(allReservation)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getOneReservation = async (req, res) => {
    try {
        const { id } = req.params
        const reservation = await Reservation.findOne({
            where: {
                id
            }
        })
        res.json(reservation)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteReservation = async (req,res)=>{
    try {
        const {id}= req.params
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

export const updateReservations = async (req,res) =>{
    try {
        const {id} = req.params
        const { status} = req.body
        const reservation = await Reservation.findByPk(id)
        reservation.status= status
        await reservation.save()
        res.json(reservation)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}