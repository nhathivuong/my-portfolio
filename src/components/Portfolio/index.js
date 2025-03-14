import TicTacToe from "./TicTacToe"
import NyanCat from "./NyanCat"

const Portfolio = () => {
    return (<>
        <h2 className="text-5xl font-mont font-bold w-100% text-center uppercase p-2 m-8" >portfolio</h2>
        <NyanCat/>
        <TicTacToe/>
    </>)
}
export default Portfolio