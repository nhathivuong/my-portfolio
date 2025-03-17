import TicTacToe from "./TicTacToe"
import NyanCat from "./NyanCat"

const Portfolio = () => {
    return (<>
        <h1 className="text-4xl sm:text-5xl font-mont font-bold w-100% text-center xl:text-white xl:drop-shadow-[1px_1px_1px_black] uppercase p-2 m-8" >portfolio</h1>
        <NyanCat/>
        <TicTacToe/>
    </>)
}
export default Portfolio