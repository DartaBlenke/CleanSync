import { useEffect } from 'react'
import supabase from './config/supabase'
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
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <p>footer</p>
    </div>
  )
}

export default App
