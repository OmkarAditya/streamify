import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay=(songs:Song[])=>{
    const player=usePlayer();
    const authModal=useAuthModal();

    const {user}=useUser();

    const onPlay=(id:string)=>{
        // only logined users can play songs
        if(!user){
            return authModal.onOpen();
        }

        // this is for playing the current song
        player.setId(id);

        // for playlist (understand the feature eg in search we can create playlist of
        // those songs which we searched.. eg in liked songs we can create playlist of those songs which we liked etc)
        player.setIds(songs.map((song)=>song.id));
    };
    return onPlay;
}
export default useOnPlay;