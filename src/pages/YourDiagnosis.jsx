import { Link, useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar";

export default function YourDiagnosis() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[url('/bg-light.png')] bg-no-repeat bg-cover from-blue-100 to-white text-20">
            <Navbar/>
            <main className="container mx-auto mt-8 px-4 text-[#4A4A4A]">
                <h1 className="mb-8 text-center text-3xl leading-[45px] font-bold ">Your Diagnosis</h1>

                <div className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 leading-16 font-medium">
                        <h2 className="underline underline-offset-[12px] decoration-4">Enter email or phone number</h2>
                        <h2 className="underline underline-offset-[12px] decoration-4">Log in to your account</h2>
                        <div className="flex items-center gap-4 space-x-2 border-b-4 border-black pb-3">
                            <span>Sign up with</span>
                            <button variant="ghost" size="icon" className="p-2 rounded-full border border-[#1935CA]">
                                <img src="/google.png" alt="Google" width={20} height={20} />
                            </button>
                            <button variant="ghost" size="icon" className="p-2 border border-[#1935CA] rounded-full">
                                <img src="/fb.png" alt="Facebook" width={20} height={20} />
                            </button>
                            <button variant="ghost" size="icon" className="p-2 border border-[#1935CA] rounded-full">
                                <img src="/apple.png" alt="Apple" width={20} height={20} />
                            </button>
                            <button variant="ghost" size="icon" className="p-2 border border-[#1935CA] rounded-full">
                                <img src="/microsoft.png" alt="Microsoft" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                    <p className="text-[#FF0000] leading-30">! Account exists with this Email / Phone number. Click here to <Link className="underline font-bold" to="/login">login</Link></p>

                    <form className="flex flex-wrap gap-20 items-end  text-20 text-black font-medium">
                        <div className="basis-4/12 flex flex-col gap-2 h-[100px]">
                            <label htmlFor="email" className="leading-30">Email / Phone number</label>
                            <input id="email" type="text" placeholder="Enter your email or phone number" className="flex-1 border border-[#1935CA] rounded-lg text-20 leading-16 px-8 h-[60px] " />
                        </div>
                        <div className=" basis-4/12 flex flex-col gap-2 h-[100px]">
                            <label htmlFor="confirmEmail" className="leading-30">Confirm Email / Phone number</label>
                            <input id="confirmEmail" type="text" placeholder="Confirm your email or phone number" className="flex-1 border border-[#1935CA] rounded-lg text-20 leading-16 px-5 h-[60px] " />
                        </div>
                        <button className="h-[60px] basis-2/12 border border-[#1935CA] rounded-lg bg-[#00C0FF] text-white font-medium text-24">Submit</button>
                    </form>

                    <p className="text-black leading-30">Login details will be sent to this email / phone number</p>
                    <p className="text-[#FF0000] leading-30  text-center">To view the diagnosis enter your Email address/ Phone number / Sign up or Log in !</p>
                </div>

                <div className="flex flex-col justify-center mt-8 p-6  border border-[#1935CA] rounded-2xl">
                    <h2 className="mb-8 text-center text-2xl font-medium">Your diagnosis based on your answers</h2>
                    <div className="grid gap-4 md:grid-cols-[repeat(3,minmax(250px,250px))] justify-around min-h-[137px]">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className=" flex flex-col justify-center items-center rounded-lg  border border-[#1935CA] p-4 text-center max-w-[250px]">
                                <h3 className="font-semibold">Diagnosis</h3>
                                <p>diagnosis</p>
                            </div>
                        ))}
                    </div>
                    <button className="my-10 py-4 font-medium text-[24px] w-[90%] self-center bg-[#00C0FF] border border-[#1935CA] rounded-2xl text-white">Click on the above diagnosis for confirmatory examination video tests</button>
                </div>

                <div>
                    <button onClick={() => navigate(-1)} className="my-8 font-medium hover:bg-transparent hover:text-blue-600">Back</button>
                </div>
            </main>
        </div>
    )
}