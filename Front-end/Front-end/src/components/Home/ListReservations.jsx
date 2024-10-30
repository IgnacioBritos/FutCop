import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { userReservations } from "../../app/Reservations"
const ListReservations = () => {
    const reservations = useSelector((state) => state.reservation.allReservations);
    const UserReservation = useSelector(state=> state.reservation.UserReservation);
    const handelReservations =()=>{
      
    }
    const dispatch= useDispatch()
    useEffect(()=>{
        console.log(UserReservation);
        
    },[])
  return (
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
  );
};

export default ListReservations;
