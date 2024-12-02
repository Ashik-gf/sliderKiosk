import Marquee from 'react-fast-marquee'
import bdFlag from '../assets/bd.png'
import cgFlag from '../assets/cg.png'
import logo from '../assets/logo.png'
import { CarouselComponent } from './Slider'

const PlayContent = () => {
  const currentDate = new Date();

  return (
    <div className=' w-[600px] border-2 bg-[#0A3981]'>
        <div className=" w-full h-full">
            {/* header */}
            <div className="w-full h-[200px]  flex justify-between items-center">
<img className=' w-1/3 h-[120px]' src={bdFlag} />
<img className=' w-1/4 h-[120px]' src={logo} />
<img className=' w-1/3 h-[120px]' src={cgFlag} />
            </div>

            <div className=" h-[50px] border-2 px-4 ">
              <Marquee>
              <h1 className='text-3xl font-extrabold text-white'>Welcome to Bangladesh Coast Guard</h1>
              </Marquee>
             
            </div>
            {/* slider */}
            <div className="div py-2">
              <CarouselComponent />
            </div>
            {/* timer and date */}
            <div className=' flex justify-between items-center h-40 w-full border-2 text-white px-12 '>
            <p className='text-white'>Date: {currentDate.toLocaleDateString()}</p>
            <p className='text-white'>Time: {currentDate.toLocaleTimeString()}</p>
            </div>
        </div>
    </div>
  )
}

export default PlayContent