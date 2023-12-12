import React, { useEffect } from 'react'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'


const AdminDashboard = () => {
  useEffect(() => {
    // Evitar recargas continuas al verificar si la página fue recargada recientemente
    const lastReloadTime = localStorage.getItem('lastReloadTime');
    const currentTime = new Date().getTime();

    // Recargar la página solo si no se ha recargado en los últimos 5 segundos
    if (!lastReloadTime || currentTime - lastReloadTime > 5000) {
      window.location.reload();
      localStorage.setItem('lastReloadTime', currentTime);
    }
  }, []); // El segundo argumento es un array de dependencias, en este caso, un array vacío


  return (
   <div className='dashboard flex'>
    <div className='dashboardContainer flex'>
      <Sidebar/>
      <Body/>
    </div>
   </div>
  )
}

export default AdminDashboard