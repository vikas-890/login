import React from "react";
const db = [];
export function Mystore({ name, password }) {
  for (let a of db) {
    if (a.name.localeCompare(name) === 0) return -1;
  }
  db.push({ name, password });

  return 1;
}

export function MystoreLogin({ name, password }) {
  for (let a of db) {
    if (a.name.localeCompare(name) === 0) {
      if (a.password.localeCompare(password) === 0) return 1;
    }
  }
  return -1;
}
