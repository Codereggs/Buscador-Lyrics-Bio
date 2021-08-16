import React, { useState, useEffect } from "react";
import { getData } from "../helpers/usingAxios";
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
      let songURL = `https://api.vagalume.com.br/search.php?art=${artist}&mus=${song}&apikey={5db6479fc482989a89a61ada398fa188}`;
      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        getData(artistURL),
        getData(songURL),
      ]);

      setBio(artistRes);
      setLyrics(songRes);
      setLoading(false);
    };

    axiosData();
  }, [search]);

  const handleSearch = (data) => {
    /*  console.log(data); */
    setSearch(data);
  };
  return (
    <div className="songSearch">
      <article className="grid-1-3 ">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyrics={lyrics} bio={bio} />
        )}
      </article>
    </div>
  );
};
