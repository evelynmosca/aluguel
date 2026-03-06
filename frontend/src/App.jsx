import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/login'
import HomeUser from './pages/user/home'
import HomeAdmin from './pages/admin/home'
import Register from './pages/register'

import AdminRoute from './routes/AdminRoute'
import PrivateRoute from './routes/PrivateRoute'
import AdminContracts from './pages/admin/contracts'
import AdminPayments from './pages/admin/payments'
import AdminProperties from './pages/admin/properties'
import AdminUsers from './pages/admin/users'


const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        <Route
          path='/user/home'
          element={
            <PrivateRoute>
              <HomeUser />
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/home'
          element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          }
        />

        <Route
          path='/admin/contracts'
          element={
            <PrivateRoute>
              <AdminContracts />
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/payments'
          element={
            <AdminRoute>
              <AdminPayments />
            </AdminRoute>
          }
        />

        <Route
          path='/admin/properties'
          element={
            <PrivateRoute>
              <AdminProperties />
            </PrivateRoute>
          }
        />

        <Route
          path='/admin/users'
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />

      </Routes>
    </Router>
  )
}

export default App;