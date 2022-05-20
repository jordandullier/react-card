import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi,faCamera,faTree,faFaceSmileWink,faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

export default function Interest(){
    return(
        <div className="text--block">
            <h1  className="p--title" >Mes intérêts</h1>
            <p className="p--text">
                <FontAwesomeIcon icon={faCamera} color="#6f726c"/> Photographe à mes heures perdues.
                <br/> <FontAwesomeIcon icon={faTree} color="#47721c"/> Nature lover.
                <br/> <FontAwesomeIcon icon={faChampagneGlasses} color="#f7c249" /> Attrait pour les bons plats.
                <br/> <FontAwesomeIcon icon={faFaceSmileWink} color="#be7d62" /> Aime rire et faire rire les autres.
                <br/> <FontAwesomeIcon icon={faJedi} color="#871c1c"/> Stars Wars fan.
            </p>
        </div>
    )
}