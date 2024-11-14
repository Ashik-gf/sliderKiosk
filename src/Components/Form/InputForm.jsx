import { useState } from "react"

const initialState =[
    {
"id":1,
"title":"",
"bdFlag":"",
"cgFlag":"",
"cgLogo":"",
"slide":"",
"video":""
}
]
const InputForm = () => {
    const [content, setContent] = useState(initialState);
    // const [cgFlag, setCgFlag] = useState('');
    // const [video, setVideo] = useState([]);
    // const [welcome, setWelcome] = useState('');
    const handelChange =(e)=>{
        const name = e.target.name;
        let value = e.target.value;

        setContent({
            [name]: value,
        })
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 bg-opacity-25 p-4 text-white">

            <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-green-400">Uplode Content</h2>
                    <form >
                       
                     {/* bdFlag */}
                     <h1 className="text-center">Header</h1>
                     <div className=" flex justify-center items-center gap-2 ">
                     <div className="mb-4">
                            <label
                                htmlFor="taskName"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                               BD flag
                            </label>
                            <input
                                type="text"
                                id="bdFlag"
                                name="bdFlag"
                                value={content.bdFlag}
                                onChange={handelChange}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                     {/* cgFlag */}
                     <div className="mb-4">
                            <label
                                htmlFor="cgFlag"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                             Cg Flag
                            </label>
                            <input
                                type="text"
                                id="cgFlag"
                                name="cgFlag"
                                value={content.cgFlag}
                                onChange={handelChange}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                     {/* cgLogo */}
                     <div className="mb-4">
                            <label
                                htmlFor="cgLogo"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                               CG Logo
                            </label>
                            <input
                                type="text"
                                id="cgLogo"
                                name="cgLogo"
                                value={content.cgLogo}
                                onChange={handelChange}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                     </div>
                 
                    <hr className=" py-4 "/> 


                     {/* title */}
                     <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                             Slide
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={content.title}
                                onChange={handelChange}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        {/* slide photos */}
                  
                     <div className="mb-4">
                            <label
                                htmlFor="slide"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                             CG Logo
                            </label>
                            <input
                                type="text"
                                id="slide"
                                name="slide"
                                value={content.cgLogo}
                                onChange={handelChange}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                     <div className="mb-4">
                            <label
                                htmlFor="video"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                              Video
                            </label>
                            <input
                                type="text"
                                id="video"
                                name="video"
                                value={content.video}
                                onChange={handelChange}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>)
  
}

export default InputForm