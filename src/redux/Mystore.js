import React from "react";
const db = [];
function Mystore({ name, password }) {
  for (let a of db) {
    if (a.name.localeCompare(name) === 0) return -1;
  }
  db.push({ name, password });
  console.log(db);
  return 1;
}

export default Mystore;
