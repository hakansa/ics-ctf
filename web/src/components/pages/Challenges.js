import React, {useContext} from "react";
import NavbarPostLog from './NavbarPostLogin'
import '../../App.css'
import { Link } from 'react-router-dom'
import { ButtonContext } from "./ButtonContext";

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#1f1e1e",
}

export default function ChallengesPage() {
    const {solved} = useContext(ButtonContext);
    console.log(solved);
    return (
        <header style={HeaderStyle}>
            <NavbarPostLog/>
            <Link to="/Challenge">
                <button type='button' className={solved ? 'btn-left' : 'btn-left1'}>
                    Challenge #1
                </button>
            </Link>
            <Link to="/Challenge">
                <button type='button' className='btn-left1'>
                    Challenge #2
                </button>
            </Link>
            <Link to="/Challenge">
                <button type='button' className='btn-left1'>
                    Challenge #3
                </button>
            </Link>
            <Link to="/Challenge">
                <button type='button' className='btn-left1'>
                    Challenge #4
                </button>
            </Link>
            <Link to="/Challenge">
                <button type='button' className='btn-left1'>
                    Challenge #5
                </button>
            </Link>
            <Link to="/Challenge">
                <button type='button' className='btn-left1'>
                    Challenge #6
                </button>
            </Link>
        </header>
    )
}

