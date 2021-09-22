import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'
export default function SignUp() {
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='w-350 border px-40 mt-5'>
                    <form>
                        <h1 className='text-center my-4'>Instagram</h1>
                        <input type="text" className='form-control' placeholder="Mobile Number or Email address" />
                        <input type="text" className='form-control mt-2' placeholder="Full Name" />
                        <input type="text" className='form-control mt-2' placeholder="Username" />
                        <input type="password" className='form-control mt-2' placeholder="Password" />
                        <input type="submit" className='form-control text-white mt-3 font-weight-bold' value="Login" />
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
