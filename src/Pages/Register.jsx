import axios from 'axios'
import React, { useState } from 'react'
import { DNA } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Register = () => {
    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        password: ""
    }
    const [user, setUser] = useState(initialValues)
    const [btnLoad, setBtnLoad] = useState(false)

    const navigate = useNavigate()

    const submitInfo = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    const onSubmits = (e) => {
        e.preventDefault()
        setBtnLoad(true)
        // console.log("hyjjy");
        const url = 'https://restapinodejs.onrender.com/api/register'
        let addUser = axios.post(url, user)
            .then((response) => {
                console.log(response);
                if (response) {
                    console.log(response?.data);
                    toast.success(response?.data?.message)
                    navigate('/log_in')
                }

            })
            .catch((error) => {
                setBtnLoad(false)
                console.log(error);
            })
    }
    return (
        <>

            <div className='about'>
                <form className='form_container mt-5 mx-auto' onSubmit={onSubmits}>
                    <div className='form_header'>
                        <h1>User Registration</h1>
                    </div>

                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' placeholder='Enter your Name' name='name' onChange={submitInfo} value={user.name} />
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" className='form-control' placeholder='Enter your email' name='email' onChange={submitInfo} value={user.email} />
                    </div>

                    <div>
                        <label htmlFor="">Mobile</label>
                        <input type="text" className='form-control' name='mobile' placeholder='Enter your mobile' onChange={submitInfo} value={user.mobile} />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" className='form-control' name='password' placeholder='Enter your password' onChange={submitInfo} value={user.password} />
                    </div>
                    <div>
                        {btnLoad ? <button className='form_btn justify-content-center align-items-center'><DNA
                            visible={true}
                            height="28"
                            width="100"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        /></button> : <button className='form_btn'>Register</button>}
                    </div>

                </form>

                <div>
                    <p><u><Link to='/log_in'>Go back to LogIn page</Link></u></p>
                </div>
            </div>

        </>
    )
}

export default Register