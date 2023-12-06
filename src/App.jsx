import { useEffect } from 'react'
import supabase from './config/supabase'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SUV from './assets/img/SUV.svg'
import Bike from './assets/img/motorbike.svg'
import Car from './assets/img/car.svg'
import { Analytics } from '@vercel/analytics/react'


function App() {

  const vehicles = [
    { id: 0, text: "Sedan Hatch", imgSrc: Car, prices: [] },
    { id: 1, text: "SUVs Camionetes", imgSrc: SUV, prices: [] },
    { id: 2, text: "Motocicleta", imgSrc: Bike, prices: []}
  ]


  async function fetchData() {
    let { data: service } = await supabase.from('service').select('*')
    service.forEach((vehicle) => {
      var teste = vehicles[vehicle.type]
      teste.prices.push(vehicle.price)
    })
    localStorage.setItem('vehicles', JSON.stringify(vehicles))
  }
  
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
        <Analytics />
      </div>
    </div>
  )
}

export default App
