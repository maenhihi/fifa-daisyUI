interface MatchProps{
    name: string;
    position: string;
    age: number;
    club: string;
}



export default function individualplayers({name, position, age, club}: MatchProps) {

    return (
  
 <div className="card card-side bg-base-100 shadow-xl w-3/4 ">
  <figure className="w-fit md:w-1/4 max-h-64 overflow-hidden">
    <img
      src={`/players/${name}.jpg`}
      alt="player" 
      className="w-full h-full object-cover" 
      />
  </figure>
  <div className="card-body">
  <h2 className="card-title text-base md:text-3xl">Name: {name}</h2>

    <h2 className="card-title text-base md:text-3xl">Position: {position}</h2>
    <h2 className="card-title text-base md:text-3xl">Age: {age}</h2>
    <h2 className="card-title text-base md:text-3xl">Club: {club}</h2>   
  </div>
</div> 
    )
}