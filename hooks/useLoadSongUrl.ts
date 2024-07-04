import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl=(song:Song)=>{
    const supabaseClient=useSupabaseClient();
    if(!song){
        return '';
    }
    // const { data: songData } = ...: This is destructuring assignment. The getPublicUrl method returns an object containing a data property. This line extracts the data property and renames it to songData.
    const {data:songData}=supabaseClient
        .storage.from('songs').getPublicUrl(song.song_path);

    return songData.publicUrl;

};
export default useLoadSongUrl;