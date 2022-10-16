import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import AuthLayout from '../layout/AuthLayout'
import Layout from '../layout/Layout'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
              <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignIn />} />
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router