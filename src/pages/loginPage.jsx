export default function LoginPage(){
    return(
        <div className="w-full h-screen bg-[url(/table.webp)] bg-cover bg-center flex">  
           <div className=" w-[50%] h-full"></div>
           <div className=" w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-3xl rounded-2xl flex flex-col justify-center items-center">
                    <input className="w-[400px] h-[50px] border border-white rounded-xl m-[5px] text-center" type="email" placeholder="email " />
                    <input className="w-[400px] h-[50px] border border-white rounded-xl m-[5px] text-center" type="password" placeholder="password" />
                    <button className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">Login</button>
                </div>
           </div>

        </div>
        
    )
}