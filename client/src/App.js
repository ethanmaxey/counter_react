import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
    return <div>
        <BrowserRouter>
        
            {/* <Login /> */}
            
            {/* Anything within this <Routes> tag is not getting rendered */}

            <>
                <Routes>
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/register' exact element={<Register />} />
                </Routes>
            </>

        </BrowserRouter>
    </div>
}

export default App