//here is a file containing all the coding technologies I have used
//this is used in both the home page and the about me

const Logos = () => {
    return (
        <div className="flex justify-between items-center flex-row h-20 border-t-2">
            <img className="max-h-15 p-1" src="/assets/html.png" alt="html logo"/>
            <img className="max-h-15 p-1" src="/assets/css.png" alt="css logo"/>
            <img className="max-h-15 p-1" src="/assets/javascript.png" alt="javascript logo"/>
            <div className="flex justify-between flex-row h-15 p-1">
                <img src="/assets/github-mark.png" alt="github mark logo"/>
                <img src="/assets/github-text.png" alt="github text logo"/>
            </div>
            <img className="max-h-15 p-1" src="/assets/react.png" alt="react logo"/>
            <img className="max-h-15 p-1" src="/assets/mongodb.png" alt="mongodb logo"/>
            <img className="max-h-15 p-1" src="/assets/styled-components.png" alt="styled components logo"/>
            <img className="max-h-15 p-1" src="/assets/tailwindcss-logotype.svg" alt="tailwind logo"/>
        </div>
    )
}

export default Logos