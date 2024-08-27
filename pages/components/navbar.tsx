import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-indigo-400 relative z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-black italic">FIFA ©</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <ul className="hidden md:inline-flex">

            <li>
              <Link href="/" className="text-indigo-100 ">Home</Link>
            </li>
            <li>
              <Link href="/teams" className="text-indigo-100">Teams</Link>
            </li>
            <li>
              <Link href="/matches" className="text-indigo-100 ">Matches</Link>
            </li>
            <li>
              <Link href="/standings" className="text-indigo-100">Standings</Link>
            </li>
            </ul>

            <li>
              <details className="block md:hidden z-2">
                <summary className="pr-10">
                 <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
  <li className="px-2 py-1">
    <Link className="p-0.5" href="/">
      Home
    </Link>
  </li>
  <li className="px-2 py-1">
    <Link className="p-0.5" href="/teams">
      Teams
    </Link>
  </li>
  <li className="px-2 py-1">
    <Link className="p-0.5" href="/matches">
      Matches
    </Link>
  </li>
  <li className="px-2 py-1">
    <Link className="p-0.5" href="/standings">
      Standings
    </Link>
  </li>
</ul>

              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
