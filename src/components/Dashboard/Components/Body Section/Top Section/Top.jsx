import React from 'react'
import './top.css'
import { BiSearchAlt } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

//ESTE IMPORT TRAE TODO EL CONTEXTO DEL LOGIN Y TRAERIA LOS DATOS
//INICIO DE SESION POR EJEMPLO CORREO, USUARIO Y ROL.
import {useAuth} from '../../../../../contexts/AuthContext'
import admin from '../..//../../../assets/admin.png'



const Top = () => {
  const {user} = useAuth();
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido</h1>
          <p>Hola, {user.usuario} Bienvenido de vuelta!</p>
        </div>
        <div className='searchBar flex'>
          <input type='text' placeholder='Buscador'></input>
          <BiSearchAlt className='icon'/>
        </div>
        <div className="adminDiv flex">
          <TbMessage className='icon'/>
          <IoNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src={admin} alt="Admin Image" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
        </div>
      </div>
    </div>
  )
}

export default Top