import "./peep.scss"
import {useCycle} from "framer-motion"
import React from "react"
import Divider from "./divider"
export default function Card({color, label, title, description}) {
    return (
        <div
        className={"card "}
        style={{backgroundImage:color}}
        >
            <span className="container">
            <h6 className="label">{label}</h6>
            <b className="title"><h1>{title}</h1></b>
            <Divider style={{
            top:'-36px',
            }}/>
            <h5 className="description">{description}</h5>
            </span>
        </div>
)
}
