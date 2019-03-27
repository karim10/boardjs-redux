import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dragged: false };
  }

  onDragStart(e, id) {
    e.dataTransfer.setData("id", id);
    this.setState({
      dragged: true
    });
  }

  onDragEnd() {
    this.setState({
      dragged: false
    });
  }

  render() {
    const user = this.props.getUser(this.props.userId);
    const opacity = this.state.dragged ? 0.5 : 1;
    return (
      <div
        style={{ ...cardStyles, opacity: opacity }}
        draggable
        onDragEnd={() => this.onDragEnd()}
        onDragStart={e => this.onDragStart(e, this.props.id)}
      >
        <div style={titleStyles}>{this.props.title}</div>
        <div style={descStyles}>{this.props.description}</div>
        <img alt="" style={avatarStyles} src={user.avatar} title={user.first_name}/>
      </div>
    );
  }
}

const descStyles = {
  textAlign: "left",
  paddingLeft: "10px",
  width: "200px"
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
  paddingTop: "20px",
  fontWeight: "bold"
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
