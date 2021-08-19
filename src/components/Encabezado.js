import React from "react";

const Encabezado = () => {
  const styleDiv = {
    backgroundColor: "var(--second-color)",
    color: "var(--font-color)",
    borderBottom: "2px solid var(--third-color)",
    padding: "0.5rem 0px",
    position: "sticky",
    top: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: "1",
    width: "100%",
    textAlign: "center",
  };
  return (
    <div style={styleDiv}>
      <h2>Song Search</h2>
    </div>
  );
};

export default Encabezado;
