import Playlists from "./Playlists";
import Results from "./Results";

export default function SearchResults(){
    return (
        <section className="results-playlist-container"> 
           <Results />
            <Playlists />
      </section>
    )
}