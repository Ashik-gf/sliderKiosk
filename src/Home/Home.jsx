import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className=' flex justify-center items-center py-12'>
        <Link to={'/inputFrom'}>
         <button className=' border-2  px-3 py-1 rounded-md bg-gradient-to-l from-blue-500 text-White'>
            Uplode Content
        </button>
        </Link>
        <Link to={'/playContent'}>
         <button className=' border-2  px-3 py-1 rounded-md bg-gradient-to-l from-blue-500 text-White'>
            Play
        </button>
        </Link>
       
    </div>
  )
}

export default Home