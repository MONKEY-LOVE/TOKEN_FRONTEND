import React from 'react'
import './Body.css'
import Top from '../../../components/Dashboard/Components/Body Section/Top Section/Top'


const Body = () => {
  return (
    <div className='mainContent'>
      <Top />

      <div className='bottom flex'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Profesor</th>
      <th scope="col">Estudiante</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Roberto Perez</td>
      <td>Hugo Aguilera</td>
      <td>29-11-2023</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Body