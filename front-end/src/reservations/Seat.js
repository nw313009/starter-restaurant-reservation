import React,{useState,useEffect} from "react";
import { useHistory } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import { readReservation,listTables,seatTable } from "../utils/api";
import Reservation from "./Reservation";

export default function Seat(){

    const initialFormState ={
        table_id: "",
    }

    const [form,setForm] = useState({...initialFormState});
    const [reservation,setReservation] = useState({});
    

}