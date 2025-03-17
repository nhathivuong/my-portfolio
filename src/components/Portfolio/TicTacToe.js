const TicTacToe = () =>{
    return (
        <div className="text-center xl:text-white flex justify-center sm:justify-between justify-self-center items-center flex-col sm:flex-row sm:flex-wrap gap-4 w-fit m-5 xl:p-2 xl:drop-shadow-[1px_1px_1px_black] hover:bg-slate-900 rounded-sm">
            <div className="sm:w-[70%]">
                <h2 className="text-xl sm:text-3xl font-mont font-bold capitalize p-2">tic-tac-toe</h2>
                <img src="/assets/portfolio/tictactoe.gif" alt="a tic tac toe game" className="ring-2 inset-ring border-3 border-black"/>
            </div>
            <div className="text-left w-full sm:w-fit">
                <h3 className="text-md sm:text-xl font-mont font-bold capitalize mb-2">features</h3>
                <ul className="font-fira capitalize">
                    <li><p>Winning condition detection</p></li>
                    <li><p>History of the winner</p></li>
                    <li><p>Alternate first player</p></li>
                    <li><p>useState and useEffect</p></li>
                    <li>
                        <p className="font-bold italic mt-2">Bot Ai</p>
                        <ul className="text-sm">
                            <li><p className="italic">plays a winning move</p></li>
                            <li><p className="italic">plays a blocking move</p></li>
                            <li><p className="italic">Plays in the middle square</p></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TicTacToe