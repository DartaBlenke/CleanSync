import { useEffect } from 'react'
import supabase from './config/supabase'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  async function fetchData() {
    let { data: client } = await supabase.from('client').select('*')
    console.log(client)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Clean Sync</h1>
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App
