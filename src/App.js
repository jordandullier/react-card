import React from "react";
import { Photo } from "./components/Infos";
import { Name,Job,ContactButtons } from "./components/Infos";
import  About from "./components/About";
import '../src/style.css';
import Interest from "./components/Interests";
import Footer from "./components/Footer";

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
                <Footer/>
            </div>
        </div>
    )
}