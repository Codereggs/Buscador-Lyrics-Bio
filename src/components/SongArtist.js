import React from "react";
import { Typography } from "@material-ui/core";

export const SongArtist = ({ artist, refArtist }) => {
  return (
    <section className="song-artist none" ref={refArtist}>
      <Typography variant="h3" component="h2" style={{ margin: "1rem" }}>
        {artist.strArtist}
      </Typography>
      <a href={artist.strWebsite} target="_blank" rel="noreferrer">
        <img
          src={artist.strArtistThumb}
          alt={artist.strArtist}
          className="artist-img"
          style={{ cursor: "pointer", boxShadow: "0px 0px 12px 0.5px #00FFF3" }}
        />
      </a>
      <p>Año de nacimiento/Fundación: {artist.intBornYear}</p>
      <p>País de origen: {artist.strCountry}</p>
      <p>
        Género musical: {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={artist.strWebsite} target="_blank" rel="noreferrer">
        -Sitio web oficial-
      </a>
      <p className="music-bio">
        Biografía: {artist.strBiographyES || artist.strBiographyEN}
      </p>
    </section>
  );
};
