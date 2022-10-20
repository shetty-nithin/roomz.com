import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <span className="logo">roomZ.com</span>
                </Link>
                {user 
                    ? (<div className="navItems">
                        <span>{user.username}</span>
                        <Link to="/login" onClick={() => localStorage.removeItem("user")}>
                            <button className="navButton">Logout</button>
                        </Link>
                    </div>)
                    : (<div className="navItems">
                        <button className="navButton">Register</button>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Navbar;