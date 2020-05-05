import React from "react";
import List from "./List";
export default function Main({ cards, onFormSubmit, onCardMove, onCardDelete }) {
  console.log(cards);
  return (
    <main>
      <List onCardDelete={onCardDelete} onCardMove={onCardMove} onFormSubmit={onFormSubmit} cards={cards.filter((c) => c.list === "todo")} header="ToDo" />
      <List onCardDelete={onCardDelete} onCardMove={onCardMove} onFormSubmit={onFormSubmit} cards={cards.filter((c) => c.list === "doing")} header="Doing" />
      <List onCardDelete={onCardDelete} onCardMove={onCardMove} onFormSubmit={onFormSubmit} cards={cards.filter((c) => c.list === "done")} header="Done" />
    </main>
  );
}
