const TicTacToe = () =>{
    return (
        <div className="text-center grid grid-cols-2 justify-self-center items-center gap-50 max-w-[90vw] m-5 p-2">
            <div className="flex flex-col text-right">
            <h4 className="text-xl font-mont font-bold capitalize mb-4">features</h4>
            <ul className="font-fira capitalize">
                <li><p>Winning condition detection</p></li>
                <li><p>History of the winner</p></li>
                <li><p>Alternate first player</p></li>
                <li><p>useState and useEffect</p></li>
                <li>
                    <p className="font-bold italic mt-2">Bot Ai</p>
                    <ul>
                        <li><p className="italic">plays a winning move</p></li>
                        <li><p className="italic">plays a blocking move</p></li>
                        <li><p className="italic">Plays in the middle square</p></li>
                    </ul>
                </li>
            </ul>
            </div>
            <div>
            <h3 className="text-3xl font-mont font-bold capitalize p-4">tic-tac-toe</h3>
            <img src="/assets/portfolio/tictactoe.gif" alt="a tic tac toe game" className="w-200"/>
            </div>
        </div>
    )
}

export default TicTacToe