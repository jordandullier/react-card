import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi,faCamera,faTree,faFaceSmileWink,faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare,faGitSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer>
            <a href="https://www.instagram.com/jordand/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare}/>
            </a>
            <a href="https://github.com/jordandullier" target="_blank">
                <FontAwesomeIcon icon={faGitSquare}/>
            </a>
        </footer>
    )
}