import React from "react";

export const SongLyrics = ({ title, lyrics, refLyrics }) => {
  return (
    <section className="song-lyrics" ref={refLyrics}>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </section>
  );
};
