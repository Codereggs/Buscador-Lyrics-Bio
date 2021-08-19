import React, { useState, useEffect, useRef } from "react";
import { getData } from "../helpers/usingAxios";
import { Loader } from "./Loader";
import { SongDetails } from "./SongDetails";
import { SongForm } from "./SongForm";
import { Button } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AlbumIcon from "@material-ui/icons/Album";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSwitch, setIsSwitch] = useState(null);
  const refLyrics = useRef();
  const refArtist = useRef();

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

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  const handleSearch = (data) => {
    /*  console.log(data); */
    setSearch(data);
  };

  const handleLyricsAndArtist = (e) => {
    if (!search) return;
    refLyrics.current.classList.toggle("none");
    refArtist.current.classList.toggle("none");
    let swiche = refLyrics.current.classList;
    if (swiche[1] === "none") setIsSwitch(true);
    else setIsSwitch(null);
  };
  return (
    <div className="songSearch">
      <article className="grid-1-3 ">
        {loading ? <Loader /> : <SongForm handleSearch={handleSearch} />}

        {search && !loading && (
          <SongDetails
            search={search}
            lyrics={lyrics}
            bio={bio}
            refLyrics={refLyrics}
            refArtist={refArtist}
          />
        )}
      </article>
      {isMobile ? (
        <Button
          type="submit"
          variant="contained"
          size="small"
          className="switch-lyrics-artist-btn"
          onClick={handleLyricsAndArtist}
        >
          {isSwitch ? <MusicNoteIcon /> : <AlbumIcon />}
        </Button>
      ) : null}
    </div>
  );
};
