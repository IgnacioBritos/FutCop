import Nav from "../Nav/Nav"
import { useSelector,useDispatch } from "react-redux";
import { allReservations } from "../../app/Reservations";
import { useEffect } from "react";
const Home =()=>{
    const reservations = useSelector((state) => state.reservation.allReservations);
    const dispatch = useDispatch();
    
useEffect(()=>{
dispatch(allReservations())
console.log(reservations);
},[dispatch])
    return(
        <main className="min-h-screen flex p-4 items-center justify-center bg-bg-dark">
            <div className="flex flex-col w-4/5 bg-[#c9def767] rounded-md border  border-[#c8c8c864] p-2 justify-between">
                <Nav/>
                <div>
                {reservations && reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="bg-white rounded-lg m-4 shadow-md p-4 flex flex-col justify-between"
              >
                <h2 className="text-xl font-semibold">{reservation.location}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Fecha: {reservation.date} - Hora: {reservation.time}
                </p>
                <p className="text-sm mb-2">
                  Jugadores: {reservation.number_of_players}
                </p>
                <p className="text-sm mb-2">
                  Descripción: {reservation.description}
                </p>
                <p className="text-xs text-gray-400">
                  Del {reservation.start_date} al {reservation.end_date}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tienes reservaciones aún.</p>
          )}
                </div>
            </div>
        </main>
    )
}
export default Home