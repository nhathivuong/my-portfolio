//here is a file containing all the coding technologies I have used
//this is used in both the home page and the about me

const Logos = () => {
    return (
        <div className="flex justify-around justify-self-center items-center flex-row flex-wrap h-fit w-screen sm:w-[500px] xl:w-[98%] bg-white rounded-md shadow-2xs my-4">
            <img className="max-h-15 p-2" src="/assets/logos/html.png" alt="html logo" draggable="false" loading="lazy"/>
            <img className="max-h-15 p-2" src="/assets/logos/css.png" alt="css logo" draggable="false" loading="lazy"/>
            <img className="max-h-15 p-2" src="/assets/logos/javascript.png" alt="javascript logo" draggable="false" loading="lazy"/>
            <div className="flex flex-row">
                <img className="max-h-15 pl-2 py-2" src="/assets/logos/github-mark.png" alt="github mark logo" draggable="false" loading="lazy"/>
                <img className="max-h-15 pr-2 py-2" src="/assets/logos/github-text.png" alt="github text logo" draggable="false" loading="lazy"/>
            </div>
            <img className="max-h-15 p-2" src="/assets/logos/react.png" alt="react logo" draggable="false" loading="lazy"/>
            <img className="max-h-15 p-2" src="/assets/logos/mongodb.png" alt="mongodb logo" draggable="false" loading="lazy"/>
            <img className="max-h-15 p-2" src="/assets/logos/styled-components.png" alt="styled components logo"draggable="false" loading="lazy"/>
            <img className="max-h-10 p-2" src="/assets/logos/tailwindcss-logotype.svg" alt="tailwind logo" draggable="false" loading="lazy"/>
        </div>
    )
}

export default Logos