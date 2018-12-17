import React from "react";
import Column from "./Column";
import { initialState } from "../helpers/constants";
import Filter from "../components/Filter";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getCard(id) {
    return this.state.cards.find(card => card.id === id);
  }

  updateCards(cardId, columnTitle) {
    const card = this.getCard(cardId);
    const cardIndex = this.state.cards.findIndex(c => c.id === cardId);
    let newCards = this.state.cards;
    newCards.splice(cardIndex, 1, { ...card, state: columnTitle });
    this.setState({
      cards: newCards
    });
  }

  updateFilter(userId) {
    this.setState({
      filter: userId
    });
  }

  getUser(userId) {
    return this.state.users.find(user => user.id === userId);
  }

  render() {
    let cardsComplete = [];
    let cardsUncomplete = [];
    if (this.state.filter !== null) {
      cardsComplete = this.state.cards.filter(card => {
        return card.state === "completed" && card.userId === this.state.filter;
      });
      cardsUncomplete = this.state.cards.filter(card => {
        return (
          card.state === "uncompleted" && card.userId === this.state.filter
        );
      });
    } else {
      cardsComplete = this.state.cards.filter(card => {
        return card.state === "completed";
      });
      cardsUncomplete = this.state.cards.filter(card => {
        return card.state === "uncompleted";
      });
    }

    return (
      <div>
        <Filter
          users={this.state.users}
          updateFilter={this.updateFilter.bind(this)}
        />
        <div style={boardStyles}>
          <Column
            title="completed"
            cards={cardsComplete}
            updateCards={this.updateCards.bind(this)}
            getUser={this.getUser.bind(this)}
          />
          <Column
            title="uncompleted"
            cards={cardsUncomplete}
            updateCards={this.updateCards.bind(this)}
            getUser={this.getUser.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const boardStyles = {
  borderStyle: "solid",
  borderWidth: "5px",
  borderColor: "green",
  width: window.innerWidth - 100 + "px",
  height: window.innerHeight - 100 + "px",
  position: "absolute",
  left: "0",
  right: "0",
  bottom: "0",
  top: "0",
  margin: "auto",
  display: "flex"
};

export default Board;
