import path from 'path';
import fs from 'fs/promises';
import Image from 'next/image';
import IndividualTeamMatch from '@/pages/components/individualTeamMatch';
import Individualplayers from '@/pages/components/individualplayers';
import { Key } from 'readline';

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const paths = data.teams.map((team: any) => ({
        params: { id: team.id.toString() }
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const team = data.teams.find((team: any) => team.id.toString() === params.id);

    if (!team) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            team,
        },
    };
}

export default function teams({ team }: any) {
    const teamPlayers = team.players
    const recentMatches = team.recent_matches
    return (
    <>
    
    <section id="TeamDetails" className='h-screen'>
        <div className="row individual__team--row">
         
          <div className="individual__team--upper">
          
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(/squad/${team.name}.jpg)`,
              }}>
              <div className="hero-overlay bg-opacity-60">
              <div className="return__arrow--wrapper">

</div>
              </div>
             
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{team.name}</h1>
                  <p className="mb-5">
                    {team.history}
                  </p>
                  <a href="#team__lower" className='translate-x-2/4'>
                    <button className="btn btn-primary">Explore More!</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="team__lower" className='bg-indigo-200 p-0'>
      <h2 className='p-4 text-indigo-900 flex justify-around items-center text-3xl font-bold'>Here&apos;s how {team.name} has been going so far</h2>


        <div className="flex flex-wrap justify-around items-center gap-4">
          {recentMatches.map((array: {id:number; date: string; opponent: string; result: string; }) => (
            <IndividualTeamMatch
            key={array.id}
              date={array.date}
              opponent={array.opponent}
              result={array.result}
            />
          ))}
        </div>
      
        <h2 className='p-4 text-indigo-900 text-3xl font-bold flex justify-around items-center'>Here&apos;s a spotlight on {team.name}&apos;s brightest stars in this edition&apos;s World Cup</h2>
        <div className='flex flex-wrap justify-center items-center gap-4'>
          {teamPlayers.map((array: {id:number; name: string; position: string; age: number; club: string; }) => (
            <Individualplayers
            key={array.id}
            name={array.name}
              position={array.position}
              age={array.age}
              club={array.club}
            />
          ))}
        </div>
      </section>
      </>
       )}
