import React from "react";
import Card from "./Card";
class Column extends React.Component {
  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e, title) {
    const id = e.dataTransfer.getData("id");
    this.props.updateCards(parseInt(id, 10), title);
  }

  render() {
    return (
      <div
        style={columnStyles}
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => {
          this.onDrop(e, this.props.title);
        }}
      >
        <div>{this.props.title}</div>
        {this.props.cards.map((card, index) => {
          return <Card key={index} {...card} getUser={this.props.getUser} />;
        })}
      </div>
    );
  }
}

var columnStyles = {
  borderStyle: "solid",
  borderWidth: "3px",
  borderColor: "#5890A3",
  overflowY: "scroll",
  width: "340px"
};

export default Column;
