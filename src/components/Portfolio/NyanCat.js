//my nyan cat project component used in portfolio page
const NyanCat = () =>{
    return (
        <div className="text-center grid grid-cols-2 justify-self-center items-center gap-50 max-w-[80vw] m-5 p-2">
            <div>
            <h3 className="text-3xl font-mont font-bold p-4">Nyan Cat</h3>
            <img className="border-2" src="/assets/portfolio/NyanCat.gif" alt="a space invader inspired game"/>
            </div>
            <div>
            <h4 className="text-xl text-left font-mont font-bold capitalize mb-4">features</h4>
            <ul className="text-left font-fira capitalize">
                <li><p>Collision detection</p></li>
                <li><p>WASD and Arrow mouvement</p></li>
                <li><p>Bonus granting immunity for the next collision</p></li>
                <li><p>Bonus giving more point</p></li>
                <li><p>Track a history of the best score using JSON</p></li>
                <li><p>Increased difficulty with progression</p></li>
                <li><p>Start and Restart button</p></li>
            </ul>
            </div>
        </div>
    )
}

export default NyanCat