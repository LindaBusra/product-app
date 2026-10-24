import { ReactNode } from "react";
import "./Pagination.css";


type Props = {
    children: ReactNode;
}


export default function Pagination({children} : Props){

    return(

        <>
        {children}</>
    )
}