
import { IoIosMail } from "react-icons/io";

const Home = () => {
    return (
        <>
        <div className="text-center m-50">
            <h2 className="text-7xl font-mont font-bold">NHA-THI VUONG</h2>
            <p className="text-3xl font-fira">Full-Stack Web Developper based in Montreal</p>
            <p className="font-fira mt-4"> brief description</p>
            <div className="flex justify-center items-center">
                <a href="https://www.linkedin.com/in/nha-thi-vuong/"><img src="/assets/logos/InBug-Black.png" alt="LinkedIn logo" className="h-10"/></a>
                <a href="mailto:nhathivuong@gmail.com"><IoIosMail className="text-6xl ml-3 mr-3"/></a>
                <a href="https://github.com/nhathivuong"><img src="/assets/logos/github-mark.png" alt="github logo" className="h-10"/></a>
            </div>
        </div>
        </>
    )
}

export default Home