
const About = () => {
    return (<>
    <h2 className="text-5xl font-mont font-bold w-100% text-center uppercase p-2 mt-8 mb-4">About Me</h2>
        <div className="flex justify-center justify-self-center items-center flex-col gap-2 p-4 mb-4 w-[60vw] bg-linear-[155deg,#6c8bff,#5a7dff,#4b73e6] rounded-xl text-white drop-shadow-sm">
            <h3 className="text-3xl font-mont font-bold drop-shadow-[1px_1px_1px_black]">My past experiences</h3>
            <div className="flex justify-center items-center flex-row gap-4">
                <div className="p-4 rounded-md backdrop-brightness-80">
                <h4 className="text-xl text-left font-mont font-bold capitalize">VC Analyst</h4>
                <p className="text-justify font-fira">My most recent experience is as an analyst in AmorChem a venture capital. I learned how to pitch compagnies and product in order to get partnership and funding. I also learned to keep in touch with the latest news. </p>
                </div>
                <div className="p-4 rounded-md backdrop-brightness-80">
                <h4 className="text-xl text-left font-mont font-bold capitalize">Ice Cream Server</h4>
                <p className="text-justify font-fira" >My most recent experience is as an Analyst in AmorChem a venture capital. I learned how to pitch compagnies and product in order to get partnership and funding. I also learned to keep in touch with the latest news. </p>
                </div>
            </div>
        </div>
        <div className="flex justify-center justify-self-center items-center flex-col gap-4 p-4 mb-4 w-[60vw] bg-linear-[155deg,#6c8bff,#5a7dff,#4b73e6] rounded-xl text-white drop-shadow-sm">
            <p className="text-justify font-fira p-4 rounded-md backdrop-brightness-80">I'm always looking to expand my skills, and right now, I'm currently learning Angular. When picking up new technologies, I use my existing knowledge to make connections and learn efficiently. For example, when learning Tailwind, I didn't rely on tutorials. Instead, I explored the official documentation and applied my CSS experience to understand it quickly. This approach reflects my problem-solving skills, adaptability, and ability to learn independently—traits that help me stay up to date in web development.</p>
            <p className="text-justify font-fira p-4 rounded-md backdrop-brightness-80">Having worked in an industry with frequent innovation, I learned to adapt quickly and shift priorities when unexpected tasks arose. This experience taught me how to manage additional workloads effectively. In school, I often took the initiative to help others. For instance, when the secretary of the student council couldn't attend a meeting, I stepped in to handle communications and took minutes, ensuring everything ran smoothly. This experience reflects my ability to collaborate, problem-solve, and remain flexible in dynamic environments.</p>
        </div>
    </>)
}

export default About