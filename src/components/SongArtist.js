import React from "react";

export const SongArtist = ({ artist, refArtist }) => {
  return (
    <section className="song-artist" ref={refArtist}>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>Año de nacimiento: {artist.intBornYear}</p>
      <p>País de origen: {artist.strCountry}</p>
      <p>
        Género musical: {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={artist.strWebsite} target="_blank" rel="noreferrer">
        Sitio web oficial.
      </a>
      <p>Biografía: {artist.strBiographyES || artist.strBiographyEN}</p>
    </section>
  );
};
