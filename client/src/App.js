import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
    return <div>
        <BrowserRouter>
            <>
                <Routes>
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/register' exact element={<Register />} />
                    <Route path='/dashboard' exact element={<Dashboard />} />
                </Routes>
            </>
        </BrowserRouter>
    </div>
}

export default App