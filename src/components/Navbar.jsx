import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
    </nav>
  )
}

export default Navbar