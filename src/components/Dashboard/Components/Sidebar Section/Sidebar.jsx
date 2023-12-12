import React from 'react'
import './sidebar.css'
import logo from '../../Assets/equipo.png'
import { IoMdSpeedometer } from "react-icons/io";
import { MdGeneratingTokens } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt="image Name"/>
          <h2>Token Docente</h2>
      </div>
      <div className='menuDiv'>
         <h3 className="divTitle">
          MENU
         </h3>
         <ul className="menuLists grid">
          <li className="listItem">
            <a href='/dashboard-admin' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className="smallTexx">
                Dashboard
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href='/historial-tokens' className='menuLink flex'>
             <MdGeneratingTokens className='icon'/>
              <span className="smallTexx">
                Historial Tokens
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href='/crear-tokens' className='menuLink flex'>
            <MdManageAccounts className='icon'/>
              <span className="smallTexx">
                Crear Tokens
              </span>
            </a>
          </li>
         </ul>
      </div>

      <div className='settingsDiv'>
         <h3 className="divTitle">
          CONFIGURACIONES
         </h3>
         <ul className="menuLists grid">
          <li className="listItem">
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className="smallTexx">
                Tickets
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
             <MdGeneratingTokens className='icon'/>
              <span className="smallTexx">
                Gestionar Tokens
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href='#' className='menuLink flex'>
            <MdManageAccounts className='icon'/>
              <span className="smallTexx">
                Crear Cuentas
              </span>
            </a>
          </li>
         </ul>
      </div>

    <div className='sideBarCard'>
      <BsQuestionCircle className='icon'/>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Centro de Ayuda</h3>
        <p>Tienes algun problema, porfavor contactanos en el siguiente formulario</p>
        <button className='btn'>Click Aqui</button>
      </div>
    </div>
    </div>

  )
}

export default Sidebar