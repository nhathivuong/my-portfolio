const TicTacToe = () =>{
    return (
        <div className="text-center xl:text-white flex justify-center justify-self-center items-center flex-col sm:flex-row sm:flex-wrap gap-4 w-full sm:w-[90vw] xl:w-[60vw] m-5 p-2 sm:p-4 xl:drop-shadow-[1px_1px_1px_black] ring-4 inset-ring xl:hover:bg-slate-900 sm:rounded-xl">
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