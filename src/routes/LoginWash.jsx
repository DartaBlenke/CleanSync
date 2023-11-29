import { Button } from '../components/Button'
import { Input }  from '../components/Input'
import { ArrowBigLeftDash } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginWash = () => {
  
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='col-start-1 col-end-3 flex justify-center items-center my-8'>
          <Link to="/">
            <Button><ArrowBigLeftDash/></Button>
          </Link>
        </div>
        <div className='col-start-6 col-end-8 flex justify-center items-center'>
          <h1>Login Lavação</h1>
        </div>

        <div className='col-start-6 col-end-8 flex justify-center items-center mt-2 w-full'>
          <Input />
        </div>
        <div className='col-start-6 col-end-8 flex justify-center items-center mt-2 w-full'>
          <Input />
        </div>
        <div className='col-start-6 col-end-8 flex justify-center items-center mt-5'>
          <Button> Enviar </Button>
        </div>
    </div>
  )
}

export default LoginWash