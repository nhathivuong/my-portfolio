import { Features } from "tailwindcss"

const Portfolio = () => {
    return (<>
        <h2>portfolio</h2>
        <div>
            <h3>Nyan Cat</h3>
            <img src="/assets/portfolio/NyanCat.gif" alt="a space invader inspired game"/>
            <h4>features</h4>
            <ul>
                <li><p>Collision detection</p></li>
                <li><p>WASD and Arrow mouvement</p></li>
                <li><p>Bonus granting immunity for the next collision</p></li>
                <li><p>Bonus giving more point</p></li>
                <li><p>Track a history of the best score using JSON</p></li>
                <li><p>Increased difficulty with progression</p></li>
                <li><p>Start and Restart button</p></li>
            </ul>
        </div>
        <div>
            <h3>tic-tac-toe</h3>
            <h4>features</h4>
            <ul>
                <li><p>Winning condition detection</p></li>
                <li><p>History of the winner</p></li>
                <li>
                    <p>Bot Ai</p>
                    <ul>
                        <li><p>plays a winning move</p></li>
                        <li><p>plays a blocking move</p></li>
                        <li><p>Plays in the middle square</p></li>
                    </ul>
                </li>
            </ul>
        </div>
    </>)
}
export default Portfolio