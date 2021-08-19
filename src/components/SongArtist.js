import React from "react";
import { Typography } from "@material-ui/core";

export const SongArtist = ({ artist, refArtist }) => {
  return (
    <section className="song-artist none" ref={refArtist}>
      <Typography variant="h3" component="h2">
        {artist.strArtist}
      </Typography>
      <img
        src={artist.strArtistThumb}
        alt={artist.strArtist}
        className="artist-img"
      />
      <p>Año de nacimiento: {artist.intBornYear}</p>
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
