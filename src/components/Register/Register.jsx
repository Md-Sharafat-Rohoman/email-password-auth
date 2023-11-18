import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState(' ');
    const [success, setSuccess] = useState(' ');
    const [showPassword, setShowPassword] = useState(false);
    console.log(registerError, success);
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('sharafat rohoman')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted =e.target.terms.value;
        console.log(name,email, password,accepted);
        setRegisterError(' ');
        setSuccess(' ');

        // console.log(typeof password);
        // if(password.length < 6){
        //     setRegisterError('Password should be at least 6 character or longer')
        //     return;
        // }
        // else if(!/[A-Z]/.test(password)){
        //     setRegisterError('your password should have at least one upper Case characters.')
        //     return;
        // }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("User Created Successfully");
                sendEmailVerification(result.user)
                .then( () =>{
                    alert("Please check your Email and verify your account")
                })
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8 ">Please Register</h2>
                <form onSubmit={handleSubmit}>
                    <input className="mb-4 w-full py-2 px-4 bg-green-500 rounded-lg" type="text" name="name" placeholder="Your name" id="" required /><br />
                    <input className="mb-4 w-full py-2 px-4 bg-green-500 rounded-lg" type="email" name="email" placeholder="Email Address" id="" required /><br />
                    <div className="relative mb-4">
                        <input className=" w-full py-2 px-4 bg-green-500 rounded-lg" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="" required /><span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span><br />
                    </div><br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2 " htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }<br></br>
                {
                    success && <p className="text-green-700">{success}</p>
                }
                <p>Already have an account? please <Link to='/login'> Login </Link></p>
            </div>
        </div>
    );
};

export default Register;