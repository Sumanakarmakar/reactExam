import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { DNA } from 'react-loader-spinner';

const Login = () => {
    const initialValue = {
        email: "",
        password: ""
    }

    const [userLog, setUserLog] = useState(initialValue)
    const [error,setError]=useState({})
    const [btnLoad, setBtnLoad] = useState(false)
    const navigate = useNavigate()

    const validation = () => {
        let error = {}

        if (!userLog.email) {
            error.email = "Email is Required"
        }
        if (!userLog.password) {
            error.password = "Password is required"
        }
        return(error)
    }

    const changeValue = (e) => {
        const { name, value } = e.target
        setUserLog({ ...userLog, [name]: value })
        console.log(userLog);
    }

    const onSubmits = (e) => {
        e.preventDefault()
        setBtnLoad(true)

        let ErrorList=validation()
        setError(validation())

        if (Object.keys(ErrorList).length===0){
            console.log("jhhkb");
            const url = 'https://restapinodejs.onrender.com/api/login'
            let addLogInData = axios.post(url, userLog)
                .then((response) => {
                    console.log(response);
                    if (response) {
                        console.log(response?.data);
                        toast.success(response?.data?.message)
                        navigate('/blog')
                    }
                })
                .catch((error) => {
                    setBtnLoad(false)
                    console.log(error);
                })
        }
            
    }
    return (
        <>


            <div className='about'>
                <form action="" className='form_container mt-5 mx-auto' onSubmit={onSubmits}>
                    <div className='form_header'>
                        <h1>Log In</h1>
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" className='form-control' placeholder='Enter your registered email' name='email' onChange={changeValue} value={userLog.email} />
                        <span style={{color: "red"}}>{error.email}</span>
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" className='form-control' placeholder='Enter your password' name='password' onChange={changeValue} value={userLog.password} />
                    </div>

                    <div>
                        {btnLoad ? <button className='form_btn justify-content-center align-items-center'><DNA
                            visible={true}
                            height="25"
                            width="100"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        /></button> : <button className='form_btn'>Log In</button>}

                    </div>

                </form>


                <div>
                    <p>New User!<u><Link to='/register_page'>Go to Register page</Link></u></p>
                </div>
            </div>


        </>
    )
}

export default Login