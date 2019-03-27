import React from "react";
import Card from "./Card";

class Column extends React.Component {
  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e, columnId) {
    const cardId = e.dataTransfer.getData("id");
    this.props.updateCards(parseInt(cardId, 10), columnId);
    this.props.updateRemoteState();
  }

  render() {
    return (
      <div
        style={columnStyles}
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => {
          this.onDrop(e, this.props.column.id);
        }}
        className="scrollBar"
      >
        <div style={columnTitleStyle}>{this.props.column.name}</div>
        {this.props.cards.map((card, index) => {
          return <Card key={index} {...card} getUser={this.props.getUser} />;
        })}
      </div>
    );
  }
}

var columnStyles = {
  overflowY: "scroll",
  width: "340px",
  float: "left",
  height: "100%"
};

var columnTitleStyle = {
  paddingTop: "10px",
  textDecoration: "underline"
};

export default Column;
