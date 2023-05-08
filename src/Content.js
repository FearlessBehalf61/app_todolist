import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList 
            items ={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "20px", fontSize: "1.5rem", color: "#4E6C50" }}>
          {" "}
          Your list is empty
        </p>
      )}
    </main>
  );
};

export default Content;
