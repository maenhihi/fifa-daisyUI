import Link from "next/link";

interface MatchProps {
    id:number;
    country: string;
    flag: string;
  }

export default function teamcard({ id, country, flag }: MatchProps) {
    return (
        <Link
        href={`/teams/${id}`}
        >
        <div className="card bg-base-100 w-70 md:w-96 shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300 m-3" key={id}>
            <div className="card-body">
                <h2 className="card-title">{country}</h2>
            </div>
            <figure>
                <img
                    src={flag}
                    alt="Flag" />
            </figure>
        </div>
        </Link>
)
}