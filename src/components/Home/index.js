//dependencies
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";
//component
import Logos from "../Logos";

const Home = () => {
    return (
        <div className="text-center p-21">
            <TextContainer>
            <h2 className="text-7xl font-mont uppercase mix-blend-screen p-[10px]">Nha-Thi Vuong</h2>
            <div className="flex justify-around justify-self-center items-center">
                <a href="https://www.linkedin.com/in/nha-thi-vuong/"><img src="/assets/logos/InBug-White.png" alt="LinkedIn logo" className="h-8 ml-4" draggable="false"/></a>
                <a href="mailto:nhathivuong@gmail.com"><IoIosMail className="text-5xl ml-4 mr-4" draggable="false"/></a>
                <a href="https://github.com/nhathivuong"><img src="/assets/logos/github-mark-white.png" alt="github logo" className="h-8 mr-4" draggable="false"/></a>
            </div>
            <p className="text-3xl font-fira mt-2">Full-Stack Web Developper based in Montreal</p>
            <p className="font-fira mt-1 mb-5 w-2xl text-justify justify-self-center items-center"> I've mainly worked with the MERN stack. In my school projects, I went beyond the requirements to explore more technologies, which led me to learn Styled Components and Tailwind. </p>
            <Logos/>
            </TextContainer>
        </div>
    )
}

const TextContainer = styled.div`
    background:linear-gradient(155deg , #6c8bff, #5a7dff, #4b73e6);
    color: white;
    text-shadow: 1px 1px 1px black;
    font-weight:bold;
    margin: 0 auto;
    padding: 10px;
    width:70%;
    text-align:center;
    border-radius: 12px;
    box-shadow: 0 1px 2px black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
// const BlendedText = styled.h2`
//     text-shadow: 1px 1px 2px black;
//     font-weight:bold;
//     margin: 0 auto;
//     padding: 10px;
//     width:70%;
//     text-align:center;
// `
// const BackgroundImage = styled.div`
//     background-image:radial-gradient(rgba(170, 172, 190, 0.5), rgba(170, 172, 190, 0.5)), url(${whitebackground});
//     background-size: cover;
//     width: 100vw;
//     min-height: 100%;
//     padding: 7em;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
// `
// const TextContainer = styled.div`
//     background-color:var(--color-cobalt);
//     border-top: 5px solid white;
//     color: white;
//     text-shadow: 1px 1px 1px black;
//     font-weight:bold;
//     margin: 0 auto;
//     padding: 10px;
//     width:70%;
//     text-align:center;
//     box-shadow: 0px 0px 5px white;
// `
// const BlendedText = styled.h2`
//     background-color:#6a95ff;
//     color:white;
//     text-shadow: 1px 1px 2px black;
//     border-radius:15px 15px 0 0 ;
//     font-weight:bold;
//     margin: 0 auto;
//     padding: 10px;
//     width:70%;
//     text-align:center;
//     mix-blend-mode: multiply;
// `
export default Home