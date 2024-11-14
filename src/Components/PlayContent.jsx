import bdFlag from '../assets/bd.png'
import cgFlag from '../assets/cg.png'
import logo from '../assets/logo.png'
import { CarouselComponent } from './Slider'

const PlayContent = () => {
  return (
    <div className=' w-[600px] border-2'>
        <div className=" w-full h-full">
            {/* header */}
            <div className="w-full h-[250px]  flex justify-between items-start">
<img className=' w-1/3 h-[170px]' src={bdFlag} />
<img className=' w-1/3 h-[170px]' src={logo} />
<img className=' w-1/3 h-[170px]' src={cgFlag} />
            </div>

            <div className="border-2 h-[60px] ">
              <h1 className='text-3xl font-extrabold text-blue-950'>Welcome to Bangladesh Coast Guard</h1>
            </div>
            {/* slider */}
            <div className="div py-2">
              <CarouselComponent />
            </div>
        </div>
    </div>
  )
}

export default PlayContent