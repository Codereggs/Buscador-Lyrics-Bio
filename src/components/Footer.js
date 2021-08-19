import React from "react";

export const Footer = () => {
  return (
    <section
      className="app-sections"
      key={3}
      style={{
        backgroundColor: "black",
        color: "var(--font-color)",
        borderTop: "3px solid var(--third-color)",
        padding: "0.5rem 0px",
        alignSelf: "flex-end",
        justifySelf: "flex-end",
        display: "inherit",

        flexDirection: "column",
        zIndex: "2",
        width: "100%",
      }}
    >
      <p
        style={{
          fontFamily: "'Teko', sans-serif",
          alignSelf: "center",
          justifySelf: "center",
          margin: "auto",
        }}
      >
        By Codereggs
      </p>
    </section>
  );
};
