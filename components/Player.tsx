"use client"

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player=usePlayer();
    const {song}=useGetSongById(player.activeId);

    // reading player from the bucket url
    // ! assures that song is not empty
    const songUrl=useLoadSongUrl(song!);

    // protection to avoid loading song if
    if(!song||!songUrl||!player.activeId){
        return null;
    }
    
    return ( 
        <div className="
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4
        ">
           <PlayerContent

                // one fact about key element is when it changes then it destroys the current element being rendered (thats what we want so that when next song plays we remove the current song)
                key={songUrl}
                song={song}
                songUrl={songUrl}
           />
        </div>
     );
}
 
export default Player;