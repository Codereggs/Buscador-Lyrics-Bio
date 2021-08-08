import React, { useState, useEffect } from "react";
import {getData} from "../helpers/usingAxios";
import { Loader } from "./Loader";
import { SongDetails } from "./SongDetails";
import { SongForm } from "./SongForm";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const axiosData = async () => {
      const { artist, song } = search;
      let artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      console.log(artistURL,songURL);
      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        getData(artistURL),
        getData(songURL)
      ]);
      //console.log(artistRes, songRes)
      setBio(artistRes);
      setLyrics(songRes);
      setLoading(false);
    }
    
    axiosData();
  }, [search])

  const handleSearch = (data) => {
    /*  console.log(data); */
    setSearch(data);
  };
  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyrics={lyrics} bio={bio} />
    </div>
  );
};
