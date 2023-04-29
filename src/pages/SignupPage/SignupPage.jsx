import { makeRequest } from "../../axios.js"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignupContext } from "../../context/SignupContext";
import DriveFolderUploadeOutLinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./SignupPage.css";

const SignupPage = () => {
    // const [file, setFile] = useState("");

    const [signupInfo, setSignupinfo] = useState({
        username: undefined,
        email: undefined,
        contry: undefined,
        img: undefined,
        city: undefined,
        phone: undefined,
        password: undefined
    });

    const { loading, error, dispatch} = useContext(SignupContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignupinfo(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        dispatch({type: "SIGNUP_START"});

        try {
            const res = await makeRequest.post("/v1/auth/signup", signupInfo);
            dispatch({type: "SIGNUP_SUCCESS", payload: res.data.details});
            navigate("/")
        }
        catch (err) {
            dispatch({type: "SIGNUP_FAILURE", payload: err.response.data});
        }
    }

    return (
        <div className="signupPage">
            <div className="signupContainer">
                <div className="title">roomZ.com</div>
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="signupInput" />
                <input type="email" placeholder="email" id="email" onChange={handleChange} className="signupInput" />
                <input type="text" placeholder="contry" id="contry" onChange={handleChange} className="signupInput" />
                <input type="text" placeholder="city" id="city" onChange={handleChange} className="signupInput" />
                <input type="text" placeholder="phone" id="phone" onChange={handleChange} className="signupInput" />
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="signupInput" />
                <input type="file" id="file" onChange={e=>(setSignupinfo(prev => ({...prev, img: e.target.files[0]})))} style={{display : "none"}}/>
                {/* <input type="file" id="file" onChange={e=>(setFile(e.target.files[0]))} style={{display : "none"}}/> */}
                <label htmlFor="file">Image : <DriveFolderUploadeOutLinedIcon className="icon"/></label>
                <button disabled={loading} onClick={handleSignup} className="signupButton">Signup</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default SignupPage;