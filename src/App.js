import React from "react";
import { Photo } from "./components/Infos";
import { Name,Job,ContactButtons } from "./components/Infos";
import  About from "./components/About";
import '../src/style.css';
import Interest from "./components/Interests";

export default function App(){
    return (
        <div className="main--card">
            <Photo/>
            <div className="card--content">
                <Name/>
                <Job/>
                <ContactButtons/>
                <About/>
                <Interest/>
            </div>
        </div>
    )
}