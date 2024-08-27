import Image from "next/image";

interface MatchProps {
    date: string;
    home_team: string;
    away_team: string;
    result: string;
}

export default function matches({ date, home_team, away_team, result }: MatchProps) {

    // const homeFlag = home_team.toLowerCase();
    // const awayFlag = away_team.toLowerCase();
    const homeFlag = home_team ? home_team.toLowerCase() : 'unknown';
    const awayFlag = away_team ? away_team.toLowerCase() : 'unknown';

    return (<>
        <div className="p-6 my-4 bg-indigo-300 text-white">
      <h2 className="text-2xl font-bold mb-4">{date}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col p-4 bg-indigo-400 rounded-lg  inner-shadow">
          <div className="flex items-center content-center justify-between mb-2">
            {/* Home Team */}
            <div className="flex items-center avatar">
              <div className="w-8 md:w-24 rounded-full overflow-hidden mr-4">
                <Image
                  src={`/flags/${homeFlag}.png`}
                  width={100}
                  height={100}
                  alt={`${home_team} flag`}
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold sm:text-lg">{home_team}</span>
            </div>

            {/* Result */}
            <div className="text-xs sm:text-lg font-bold">
              {result}
            </div>

            {/* Away Team */}
            <div className="flex items-center avatar">
              <span className="text-xs font-bold sm:text-lg mr-4">{away_team}</span>
              <div className="w-8 md:w-24 rounded-full">
                <Image
                  src={`/flags/${awayFlag}.png`}
                  width={100}
                  height={100}
                  alt={`${away_team} flag`}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  




    </>)
}