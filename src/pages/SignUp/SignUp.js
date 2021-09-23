import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useAuth } from '../../contexts/AuthContext';

export default function SignUp() {

    const initialData = {
        email: '',
        fullname: '',
        username: '',
        password: '',
    }
    const [data, setData] = useState(initialData)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const { signUp } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(data);
    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='w-350 border px-40 mt-5'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-center my-4'>Instagram</h1>
                        <input type="text" name='email' className='form-control' placeholder="Mobile Number or Email address" value={data.email} onChange={handleChange} />
                        <input type="text" name='fullname' className='form-control mt-2' placeholder="Full Name" value={data.fullname} onChange={handleChange} />
                        <input type="text" name='username' className='form-control mt-2' placeholder="Username" value={data.username} onChange={handleChange} />
                        <input type="password" name='password' className='form-control mt-2' placeholder="Password" value={data.password} onChange={handleChange} />
                        <input type="submit" className='form-control text-white mt-3 font-weight-bold' value="SignUp"/>
                    </form>
                    <div className="border-top mt-4"></div>
                    <div className="text-center my-3 small">
                        By signing up, you agree to our Terms, Data Policy and Cookie Policy.
                    </div>
                </div>
            </div>
            <div className=' row justify-content-center'>
                <div className='w-350 border px-40 mt-2'>
                    <div className="text-center my-3 small">
                        Have an account?
                        <Link className="font-weight-bold text-decoration-none" to="/login"> &nbsp; Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
