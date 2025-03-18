
const About = () => {
    return (<>
        <div className="flex justify-center justify-self-center items-center flex-col gap-2 mb-8 sm:w-[90dvw] xl:w-[60dvw] sm:rounded-xl text-white">
        <h1 className="text-4xl sm:text-5xl font-mont font-bold w-100% text-center uppercase p-2 mt-8 mb-4 drop-shadow-[1px_1px_1px_black]">About Me</h1>
            <h2 className="text-xl sm:text-3xl font-mont font-bold drop-shadow-[1px_1px_1px_black]">My education</h2>
                <div className="flex mb-6 justify-center items-center flex-col sm:flex-row gap-4 ">
                    <div className="p-4 max-sm:w-screen sm:rounded-md ring-2 inset-ring drop-shadow-sm hover:bg-slate-900">
                        <h3 className="text-md sm:text-xl text-left font-mont font-bold capitalize drop-shadow-[1px_1px_1px_black]">Bachelor in biopharmaceutical sciences</h3>
                        <p className="font-fira drop-shadow-[1px_1px_1px_black] pb-1">Université de Montréal</p>
                        <ul className="font-fira drop-shadow-[1px_1px_1px_black] list-disc ml-2">
                            <li><p>Time management</p></li>
                            <li><p>Team collaboration</p></li>
                            <li><p>Regulatory compliance</p></li>
                            <li><p>Data Analysis</p></li>
                        </ul>
                        {/* <p className="text-left font-fira drop-shadow-[1px_1px_1px_black]">My most recent experience is as an analyst in AmorChem a venture capital. I learned how to pitch compagnies and product in order to get partnership and funding. I also learned to keep in touch with the latest news.</p> */}
                    </div>
                    <div className="p-4 max-sm:w-screen sm:rounded-md ring-2 inset-ring drop-shadow-sm hover:bg-slate-900">
                        <h3 className="text-md sm:text-xl text-left font-mont font-bold capitalize drop-shadow-[1px_1px_1px_black]">Full-Stack web development diploma</h3>
                        <p className="font-fira drop-shadow-[1px_1px_1px_black] pb-1">Concordia University</p>
                        <ul className="font-fira drop-shadow-[1px_1px_1px_black] list-disc ml-2">
                            <li><p>Mern Stack</p></li>
                            <li><p>Responsive design</p></li>
                            <li><p>API integration</p></li>
                            <li><p>Problem-solving</p></li>
                        </ul>
                    </div>
                </div>
            <h2 className="text-xl sm:text-3xl font-mont font-bold drop-shadow-[1px_1px_1px_black]">My past experiences</h2>
            <div className="flex justify-center items-center flex-col sm:flex-row gap-4 ">
                <div className="p-4 sm:rounded-md ring-2 inset-ring drop-shadow-sm hover:bg-slate-900">
                    <h3 className="text-md sm:text-xl text-left font-mont font-bold capitalize drop-shadow-[1px_1px_1px_black]">VC Analyst</h3>
                    <p className="text-left font-fira drop-shadow-[1px_1px_1px_black]">My most recent experience is as an analyst in AmorChem a venture capital. I learned how to pitch compagnies and product in order to get partnership and funding. I also learned to keep in touch with the latest news.</p>
                </div>
                <div className="p-4 sm:rounded-md ring-2 inset-ring drop-shadow-sm hover:bg-slate-900">
                    <h3 className="text-md sm:text-xl text-left font-mont font-bold capitalize drop-shadow-[1px_1px_1px_black]">Ice Cream Server</h3>
                    <p className="text-left font-fira drop-shadow-[1px_1px_1px_black]" >I provided excellent service, ensuring every guest had a great experience. I handled multiple tasks at once, keeping everything running smoothly, and worked well with my team to ensure things went as planned.</p>
                </div>
                <div className="p-4 sm:rounded-md ring-2 inset-ring drop-shadow-sm hover:bg-slate-900">
                    <h3 className="text-md sm:text-xl text-left font-mont font-bold capitalize drop-shadow-[1px_1px_1px_black]">Tutor</h3>
                    <p className="text-left font-fira drop-shadow-[1px_1px_1px_black]">I took the time to understand each student's needs, adjusting my approach to help them learn at their own pace. I broke down difficult topics into simpler parts, helping students feel more confident in their understanding.</p>
                </div>
            </div>
            <h2 className="text-xl sm:text-3xl text-center font-mont font-bold mt-6 drop-shadow-[1px_1px_1px_black]">My skills</h2>
            <div className="flex justify-between justify-self-center items-center flex-row flex-wrap gap-4 sm:mb-4 sm:w-[90dvw] xl:w-[60dvw]">
                <img loading="lazy" src="/assets/IMG_20240721_120748_037.jpg" alt="Porto, Portugal" className="drop-shadow-sm object-cover sm:w-[32%] sm:rounded-xl sm:my-2"/>
                <div className="ring-2 inset-ring drop-shadow-sm sm:rounded-md sm:w-[65%] hover:bg-slate-900">
                    <p className="text-left font-fira p-4 drop-shadow-[1px_1px_1px_black] sm:rounded-xl">As a developer, I'm always looking to expand my skills, and right now, I'm currently learning Angular. When picking up new technologies, I use my existing knowledge to make connections and learn efficiently. For example, when learning Tailwind, I didn't rely on tutorials. Instead, I explored the official documentation and applied my CSS experience to understand it quickly. This approach reflects my problem-solving skills, adaptability, and ability to learn independently—traits that help me stay up to date in web development.</p>
                </div>
                <div className="sm:rounded-md ring-2 inset-ring drop-shadow-sm sm:w-[65%] hover:bg-slate-900">
                    <p className="text-left grow-2 font-fira p-4 drop-shadow-[1px_1px_1px_black] sm:rounded-xl">Having worked in an industry with frequent innovation, I learned to adapt quickly and shift priorities when unexpected tasks arose. This experience taught me how to manage additional workloads effectively. In school, I often took the initiative to help others. For instance, when the secretary of the student council couldn't attend a meeting, I stepped in to handle communications and took minutes, ensuring everything ran smoothly. This experience reflects my ability to collaborate, problem-solve, and remain flexible in dynamic environments.</p>
                </div>
                <img loading="lazy" src="/assets/IMG_20241221_151359_213.jpg" alt="Chicago, USA" className="drop-shadow-sm object-cover sm:w-[32%] sm:rounded-xl mt-2 mb-4"/>
            </div>
        </div>
    </>)
}

export default About