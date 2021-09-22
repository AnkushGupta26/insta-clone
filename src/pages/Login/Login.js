import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
export default function Login() {
    return (
        <div className='container-fluid'>
        <div className='row justify-content-center'>
            <div className='w-350 border px-40 mt-5'>
                <form>
                    <h1 className='text-center my-4'>Instagram</h1>
                    <input type="text" className='form-control' placeholder="Phone number, user or email" />
                    <input type="password" className='form-control mt-2' placeholder="Password" />
                    <input type="submit" className='form-control text-white mt-3 font-weight-bold' value="Login" />
                </form>
                <div className="border-top mt-4"></div>
                <div className="text-center my-3">
                    <Link className="small text-decoration-none" to="#">Forgot your password?</Link>
                </div>
            </div>
        </div>
        <div className=' row justify-content-center'>
            <div className='w-350 border px-40 mt-2'>
                <div className="text-center my-3 small">
                    Don't have an account?
                    <Link className="font-weight-bold text-decoration-none" to="/signup"> &nbsp; SignUp</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
