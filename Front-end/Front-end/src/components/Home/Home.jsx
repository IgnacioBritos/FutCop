import Nav from "../Nav/Nav"
import { useSelector,useDispatch } from "react-redux";
import { allReservations } from "../../app/Reservations";
import { useEffect } from "react";
import ListReservations from "./ListReservations";
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
                  <ListReservations reservation={reservations}/>
                </div>
            </div>
        </main>
    )
}
export default Home