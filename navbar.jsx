import React,{Component}from"react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
class NavBar extends Component
{   state=
    {
    }
    
    render()
    {   let {buttons,buttonIndex,onButton}=this.props;
        return(
        <Navbar className="sidebar" bg="light" expand="lg">
            <div className="container-fill">
                <Link className="navbar-brand margin_20" href="#home">
                    <FontAwesomeIcon className="bg-dark text-light" icon={faUserFriends} />
                    <span className="text-primary">Mentor</span>
                    <span className="text-danger">Plus</span> 
                </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="flex-column" id="basic-navbar-nav">
                {buttons.map((st,index)=>
                        <button className={buttonIndex===index?"btn btn-info button_div m-2 button_Active":"btn btn-info button_div button_Deactive m-2"} onClick={()=>onButton(index)}>{st}</button>
                    )}
            </Navbar.Collapse>
        </Navbar>
            )
    }

}export default NavBar;