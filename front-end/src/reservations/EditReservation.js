import React from "react";
import { useParams } from "react-router";
import ReservationForm from "./ReservationForm";
//new Reservation Page
export default function EditReservation(){

    const {reservation_id} = useParams();

    return(
        <section>
            <div className="headingBar d-md-flex my-3 p-2">
                <h1>Edit Reservation</h1>
            </div>
            <ReservationForm reservation_id={reservation_id} />
        </section>
    )
}