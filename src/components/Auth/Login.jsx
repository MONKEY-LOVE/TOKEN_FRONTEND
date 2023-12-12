import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from 'react-hook-form'
import { useAuth } from '../../contexts/AuthContext'
import './Login.css'
import '../../App.css'
import { Link, NavLink, useNavigate} from 'react-router-dom'

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

//function Login() {
//  const {register, handleSubmit, formState: {errors}} = useForm()
//  const {signin} = useAuth();
//  const onSubmit = handleSubmit(data => {
//    signin(data)
//  })

import video from '../../LoginAssets/LoginVideo.mp4'
import logo from '../../LoginAssets/LogoImagen.png'

function Login(){
  const {register, handleSubmit, formState: {errors}} = useForm()

  const {signin} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signin(data);
      navigate('/dashboard-admin');
    } catch (error) {
      console.log("test")
    }
  });


  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>
          <div className='textDiv'>
            <h2 className='title'>Token Docente</h2>
            <p></p>
          </div>
          <div className='footerDiv flex'>
            <span className="text">¿Deseas obtener una cuenta?</span>
            <Link to={'/'}>
              <button className='btn'>Registrarse</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image"/>
            <h3>Bienvenido!</h3>
          </div>
          <form onSubmit={onSubmit} className="form grid">
            <span className='showMessage'></span>
            <div className="inputDiv">
              <label htmlFor="correo">Correo Electronico</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="email"
        {...register("correo", { required: true })} placeholder='Correo Electronico'/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="contraseña">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password"
  {...register("contrasena", { required: true })} placeholder='Contraseña'/>
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Iniciar Sesion</span>
              <AiOutlineSwapRight className='icon'/>
            </button>
            <span className='forgotPassword'>
              Olvido su contraseña? <a href="">Click Aqui</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Login