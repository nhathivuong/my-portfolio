//dependencies
import { IoIosMail } from "react-icons/io";
//component
import Logos from "../Logos";

const Home = () => {
    return (
        <div className="sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-[-50%] w-dvw sm:w-[60vw] mt-10 p-2 drop-shadow-sm justify-self-center text-center sm:text-white hover:bg-slate-900 ring-4 inset-ring sm:rounded-xl ">
            <h1 className="text-4xl sm:text-7xl font-mont font-bold uppercase p-[10px] sm:drop-shadow-[1px_1px_1px_black]">Nha-Thi Vuong</h1>
            <div className="flex justify-around justify-self-center items-center">
                <a href="https://www.linkedin.com/in/nha-thi-vuong/">
                    <picture>
                        <source media="(max-width: 40rem)" srcset="/assets/logos/InBug-Black.png"/>
                        <img src="/assets/logos/InBug-White.png" alt="LinkedIn logo" className="h-8 ml-4 sm:drop-shadow-[1px_1px_1px_black]" draggable="false"/>
                    </picture>
                </a>
                <a href="mailto:nhathivuong@gmail.com"><IoIosMail className="text-5xl ml-4 mr-4 sm:drop-shadow-[1px_1px_1px_black]" draggable="false"/></a>
                <a href="https://github.com/nhathivuong">
                    <picture>
                        <source media="(max-width: 40rem)" srcset="/assets/logos/github-mark.png"/>
                        <img src="/assets/logos/github-mark-white.png" alt="github logo" className="h-8 mr-4 sm:drop-shadow-[1px_1px_1px_black]" draggable="false"/>
                    </picture>
                </a>
            </div>
            <h2 className="text-xl sm:text-3xl font-fira mt-2 sm:drop-shadow-[1px_1px_1px_black]">Full-Stack Web Developper based in Montreal</h2>
            <p className="font-fira mt-1 mb-5 mx-3 sm:w-2xl text-justify justify-self-center items-center sm:drop-shadow-[1px_1px_1px_black]"> I've mainly worked with the MERN stack. In my school projects, I went beyond the requirements to explore more technologies, which led me to learn Styled Components and Tailwind. </p>
            <Logos/>
        </div>
    )
}

export default Home