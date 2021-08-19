import React from "react";

const Encabezado = () => {
  const styleDiv = {
    backgroundColor: "var(--second-color)",
    color: "var(--font-color)",
    borderBottom: "2px solid var(--third-color)",
    padding: "0.2rem 0px",
    position: "sticky",
    top: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: "1",
    width: "100%",
    textAlign: "center",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1.3em",
  };
  return (
    <div style={styleDiv}>
      <h2>🎼 BusCan 🎼</h2>
    </div>
  );
};

export default Encabezado;
