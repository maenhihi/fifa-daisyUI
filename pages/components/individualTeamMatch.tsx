
interface MatchProps {
    date: string;
    opponent: string;
    result: string;
    id: number;
}

export default function individualTeamMatch({ date, opponent, result, id }: MatchProps) {

    return (
        <div className="matches__individual--wrapper" key={id}>
            <div className="card glass w-70 md:w-96">
                <figure>
                    <img
                        src="https://www.centennialparklands.com.au/getmedia/66be6351-9b8c-42a4-ab91-b0315e6c75a9/Soccer.jpg"
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{date}</h2>
                    <h3>{result} against {opponent}</h3>

                </div>
            </div>
        </div>

    )
}