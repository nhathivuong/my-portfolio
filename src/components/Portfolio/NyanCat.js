//my nyan cat project component used in portfolio page
const NyanCat = () =>{
    return (
        <div className="text-center sm:text-white flex justify-center sm:justify-between justify-self-center items-center flex-col sm:flex-row sm:flex-wrap gap-4 w-fit m-5 p-2 sm:drop-shadow-[1px_1px_1px_black] hover:bg-slate-900 rounded-sm">
            <div>
                <h2 className="text-xl sm:text-3xl font-mont font-bold p-2">Nyan Cat</h2>
                <img className="border-2 sm:w-[15vw] justify-self-center ring-2 inset-ring border-y-3 border-black" src="/assets/portfolio/NyanCat.gif" alt="a space invader inspired game"/>
            </div>
            <div className="text-left">
                <h3 className="text-md sm:text-xl font-mont font-bold capitalize mb-2">features</h3>
                <ul className="font-fira capitalize ">
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