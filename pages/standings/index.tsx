import React, { useState, useEffect } from "react";
import Standingstable from "@/pages/components/standingstable";
import path from 'path';
import fs from 'fs/promises';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const standings = Array.isArray(data.standings) ? data.standings : [];

    return {
        props: {
            standings
        }
    };
}

type Standing = {
    id: string;
    team: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
};


export default function standings({ standings }: { standings: Standing[] }) {    
  
  const [arr, setArr] = useState(standings);
  const [filter, setFilter] = useState<string | undefined>();

  useEffect(() => {
      if (filter === 'MOST_PLAYED') {
          setArr([...arr].sort((a, b) => b.played - a.played));
      } else if (filter === 'MOST_WINS') {
          setArr([...arr].sort((a, b) => b.wins - a.wins));
      } else if (filter === 'MOST_DRAWS') {
          setArr([...arr].sort((a, b) => b.draws - a.draws));
      } else if (filter === 'MOST_LOSSES') {
          setArr([...arr].sort((a, b) => a.losses - b.losses));
      }
  }, [filter]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
  };
  return(
        <>
       
<div className="flex justify-end p-4">
        <select onChange={handleFilterChange} name="" id="filter" >
            <option disabled value="">Sort by...</option>
            <option value='MOST_PLAYED'>Most Games Played</option>
            <option value='MOST_WINS'>Most Wins</option>
            <option value='MOST_DRAWS'>Most Draws</option>
            <option value='MOST_LOSSES'>Most Losses</option>
        </select>
        </div>
        
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Team</th>
        <th>Played</th>
        <th>Wins</th>
        <th>Draws</th>
        <th>Losses</th>
        <th>Points</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {arr.map((array: {
                    draws: number; id: React.Key | null | undefined; team: string; played: number; wins: number; losses: number; points:number;
                }) => (
                    <Standingstable
                        key={array.id}
                        team={array.team}
                        played={array.played}
                        wins={array.wins}
                        draws={array.draws}
                        losses={array.draws}
                        points={array.points}
                    />
                ))}
      
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Team</th>
        <th>Played</th>
        <th>Wins</th>
        <th>Draws</th>
        <th>Losses</th>
        <th>Points</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
                
        </>
    )
}