//here is a file containing all the coding technologies I have used
//this is used in both the home page and the about me

const Logos = () => {
    return (
        <div className="flex justify-around items-center flex-row h-15 w-auto bg-white rounded-sm shadow-2xs mt-4">
            <img className="max-h-15 p-2" src="/assets/logos/html.png" alt="html logo" draggable="false"/>
            <img className="max-h-15 p-2" src="/assets/logos/css.png" alt="css logo" draggable="false"/>
            <img className="max-h-15 p-2" src="/assets/logos/javascript.png" alt="javascript logo" draggable="false"/>
            <div className="flex justify-between flex-row h-15 w-fit p-2">
                <img src="/assets/logos/github-mark.png" alt="github mark logo" draggable="false"/>
                <img src="/assets/logos/github-text.png" alt="github text logo" draggable="false"/>
            </div>
            <img className="max-h-15 p-2" src="/assets/logos/react.png" alt="react logo" draggable="false"/>
            <img className="max-h-15 p-2" src="/assets/logos/mongodb.png" alt="mongodb logo" draggable="false"/>
            <img className="max-h-15 p-2" src="/assets/logos/styled-components.png" alt="styled components logo"draggable="false"/>
            <img className="max-h-10 p-2" src="/assets/logos/tailwindcss-logotype.svg" alt="tailwind logo" draggable="false"/>
        </div>
    )
}

export default Logos