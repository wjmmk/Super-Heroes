import React from 'react'

const LoginPage = ({ history }) => {

    const handleLogin = () => {
        //history.push('/');
        history.replace('/');
    }
    return (
        <div>
            <h1> Login Page!!!</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick= {handleLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
