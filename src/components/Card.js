import React from "react";

class Card extends React.Component {
  onDragStart(e, id) {
    e.dataTransfer.setData("id", id);
  }

  render() {
    const user = this.props.getUser(this.props.userId);
    return (
      <div
        style={cardStyles}
        draggable
        onDragStart={e => this.onDragStart(e, this.props.id)}
      >
        <div style={titleStyles}>{this.props.title}</div>
        <div style={descStyles}>Description:</div>
        <img alt="" style={avatarStyles} src={user.avatar} />
      </div>
    );
  }
}

const descStyles = {
  textAlign: "left",
  paddingLeft: "10px"
};

const cardStyles = {
  width: "290px",
  height: "150px",
  borderStyle: "solid",
  borderWidth: "5px",
  marginTop: "10px",
  marginBottom: "10px",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto"
};

const titleStyles = {
  textAlign: "left",
  paddingLeft: "10px",
  paddingTop: "10px"
};

const avatarStyles = {
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  top: "10px",
  right: "10px",
  position: "absolute"
};

export default Card;
