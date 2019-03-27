import React from "react";
import Column from "./Column";

class Board extends React.Component {

  getCardsByColumn = (column) => {
    return this.props.state.cards.filter(card => card.state === column.id);
  }

  getUser = userId => {
    return this.props.state.users.find(user => user.id === userId);
  };

  componentDidMount() {
    this.props.fetchState();
  }

  render () {
    return(
      <div>
        <div style={boardStyles}>
          {this.props.state.columns.map(column => {
            return (
              <Column
                key={column.id}
                column={column}
                cards={this.getCardsByColumn(column)}
                updateCards={this.props.updateCards}
                getUser={this.getUser}
                updateRemoteState={this.props.updateRemoteState}
              />
            );
          })}
        </div>
      </div>
  );
  }
}

const boardStyles = {
  borderStyle: "solid",
  borderWidth: "5px",
  borderColor: "black",
  display: "inline-block",
  height: window.innerHeight - 90 + "px",
  marginTop: "10px"
};

export default Board;
