import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'

//PAGINAS IMPORTADAS
import Login from './components/Auth/Login';
import Home from './pages/home-inicio/Home';
import Testpage from './pages/test';
import AdminDashboard from './components/Dashboard/AdminDashboard'
import StudentDashboard from './components/Dashboard/StudentDashboard'
import Historialtokens from './pages/historial-tokens/historialtokens'
import Creartokens from './pages/crear-tokens/creartokens';
//CONTEXTO PARA EL AUTH Y RUTAS PROTEGIDAS IMPORTADAS
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoutes from './ProtectedRoutes'

//CONSTANTE PARA EL ENRUTAMIENTO


/*const router = createBrowserRouter([
  {
    path: '/',
    element: <div> <Home/> </div>
  },
  {
    path: '/login',
    element: <div> <Login/> </div>
  },
  {
    path: '/test',
    element: <div> <Testpage/> </div>
  }
])
//NUEVAS RUTAS IMPLEMENTACION

function App(){
  return (
    <div>
      <RouterProvider router={router}/>


    </div>
  );
}*/

//export default App;


//ANTIGUAS RUTAS

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/test' element={<Testpage/>} />
            <Route path='/historial-tokens' element={<Historialtokens/>} />
            <Route path='/crear-tokens' element={<Creartokens/>} />
            <Route path='/dashboard-admin' element={<AdminDashboard/>} />
            <Route path='/dashboard-student' element={<StudentDashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

