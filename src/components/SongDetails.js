import React from "react";
import { SongArtist } from "./SongArtist";
import { SongLyrics } from "./SongLyrics";
import Message from "./Message";

export const SongDetails = ({ search, lyrics, bio, refLyrics, refArtist }) => {
  if (!lyrics || !bio) return null;

  return (
    <>
      {lyrics.type === "song_notfound" || lyrics.type === "notfound" ? (
        <Message
          msg={`Error: La canción <em> ${search.song} </em> no fue encontrada.`}
          bgColor="#f44336"
          borColor="#aa2e25"
        />
      ) : (
        <SongLyrics
          title={lyrics.mus[0].name}
          lyrics={lyrics.mus[0].text}
          refLyrics={refLyrics}
        />
      )}
      {bio.artists === null ? (
        <Message
          msg={`Error: El artísta <em>${search.artist}</em> no fué encontrado.`}
          bgColor="#f44336"
          borColor="#aa2e25"
        />
      ) : (
        <SongArtist artist={bio.artists[0]} refArtist={refArtist} />
      )}
    </>
  );
};
