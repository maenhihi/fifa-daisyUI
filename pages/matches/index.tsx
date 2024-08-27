import React from "react";
import path from 'path';
import fs from 'fs/promises';
import Matches from "@/pages/components/matches";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const matches = Array.isArray(data.matches) ? data.matches : [];

    return {
        props: {
            matches
        }
    };
}


export default function Home(matches: any) {
    let arr = Object.values(matches);
    let arr1: any = arr[0]

    return<>
    <section id="matches" className="h-full ">
    <h1 className="md:text-5xl font-bold text-2xl flex justify-center content-center text-white">
                Latest Matches!!! 
            </h1>
    {arr1.map((array: { id: React.Key | null | undefined; date: string; home_team: string; away_team: string; result: string; }) => (
                            <Matches
                                key={array.id}
                                date={array.date}
                                home_team={array.home_team}
                                away_team={array.away_team}
                                result={array.result}
                            />
                        ))}
        </section>
        
        </>
}