import Logos from "../Logos"

const About = () => {
    return (<>
    <div className="flex justify-center items-center flex-col">
        <h2 className="text-5xl font-mont font-bold w-100% text-center uppercase p-2 m-8">About Me</h2>
        <p className="w-[70vw] text-justify font-fira">I'm a curious soul. Alway up for a new chanllenge. In my free time, I like to paint, write, play video games and enjoy digital enterntainement. I like to windown to a good drama. I also travel a lot.</p>
    </div>
    <div className="flex justify-center items-center flex-col">
        <h3 className="text-3xl font-mont font-bold p-4">Technologies I have worked with</h3>
        {/* <ul className="text-left font-fira capitalize">
            <li><p>HTML</p></li>
            <li><p>CSS</p></li>
            <li><p>JavaScript</p></li>
            <li><p>GitHub</p></li>
            <li><p>REACT</p></li>
            <li><p>MongoDB</p></li>
            <li><p>Styled Components</p></li>
            <li><p>Tailwind</p></li>
        </ul> */}
        <Logos/>
    </div>
    <div className="flex justify-center items-center flex-col">
        <h3 className="text-3xl font-mont font-bold p-4">My past experiences</h3>
        <h4 className="text-xl text-left font-mont font-bold capitalize mb-2">VC Analyst</h4>
        <p className="w-[70vw] text-justify font-fira">My most recent experience is as an Analyst in AmorChem a venture capital. I learned how to pitch compagnies and product in order to get partnership and funding. I also learned to keep in touch with the latest news. </p>
        <h4 className="text-xl text-left font-mont font-bold capitalize mt-4 mb-2">Ice Cream Server</h4>
        <p className="w-[70vw] text-justify font-fira" >My most recent experience is as an Analyst in AmorChem a venture capital. I learned how to pitch compagnies and product in order to get partnership and funding. I also learned to keep in touch with the latest news. </p>
    </div>
    </>)
}

export default About