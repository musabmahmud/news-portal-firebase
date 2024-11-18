import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Register = () => {

    const handleRegister = () => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
    }

    return (
        <>
            <Navbar />
            {/* Black = bg-base-100 */}
            <div className="shadow-2xl mx-auto w-full max-w-sm card shrink-0">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="bg-white input-bordered input" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="bg-white input-bordered input" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Login Here</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Registeer</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register