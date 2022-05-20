import React from "react";
import { Photo } from "./components/Infos";
import { Name,Job,ContactButtons } from "./components/Infos";
import '@fortawesome/fontawesome-free'
import '../src/style.css';

export default function App(){
    return (
        <div className="main--card">
            <Photo/>
            <div className="card--content">
                <Name/>
                <Job/>
                <ContactButtons/>
            </div>
        </div>
    )
}