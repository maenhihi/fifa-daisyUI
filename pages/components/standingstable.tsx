import Image from "next/image";

interface MatchProps {
    team: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;
}

export default function standingstable({ team, played, wins, draws, losses, points }: MatchProps) {
    const teamLower = team.toLowerCase();
    
    return (
<tr>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <Image
                height={100}
                width={100}
                  src={`/flags/${teamLower}.png`}
                  alt="flag" 
                  />
              </div>
            </div>
            <div>
              <div className="font-bold">{team}</div>
            </div>
          </div>
        </td>
        <td>{played} </td>
        <td>{wins}</td>
        <td>{draws}</td>
        <td>{losses}</td>
        <td className="font-bold">{points}</td>
      </tr>
    )
}