import React from "react";
import profilePicture from '../images/profile.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



export function Photo(){
    return(
        <img className="profile--picture" src={ profilePicture } alt="Profile picture"/>
    )
}

export function Name(){
    return(
        <h1 className="name">Jordan Dullier</h1>
    )
}

export function Job(){
    return(
        <h2 className="job--title">Développeur FullStack</h2>
    )
}

export function ContactButtons(){
    return(
        <span className="contact--buttons">
            <a className="email--button" href='#' ><FontAwesomeIcon icon={faEnvelope} />Email</a>
            <a className="linkedIn--button" href='#' ><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
        </span>
    )
}