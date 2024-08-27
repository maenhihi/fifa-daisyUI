import React from "react";
import path from 'path';
import fs from 'fs/promises';
import Teamcard from "../components/teamcard";


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const teams = Array.isArray(data.teams) ? data.teams : [];

    return {
        props: {
            teams
        }
    };
}

export default function teams(teams: any) {
    let arr = Object.values(teams);
    let arr1: any = arr[0]
    return (
        <section id="teams" className="h-full">
            <h1 className="header__wrapper flex justify-center content-center text-white md:text-5xl font-bold text-2xl">
                Select a team from below!!!
            </h1>
            <div className="flex flex-wrap justify-center content-center">
            {arr1.map((array: { id: number; country: string; flag: string; }) => (
                <Teamcard
                    key={array.id}
                    id={array.id}
                    country={array.country}
                    flag={array.flag}
                />
            ))}
            </div>
        </section>
    )
}