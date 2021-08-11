import React from "react";

const Message = ({ msg, bgColor, borColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    border: `0.3rem solid ${borColor}`,
    borderRadius: "10px",
    margin: "1rem",
  };
  //Falta añadir hover con efecto de transisión
  return (
    <div style={styles}>
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
