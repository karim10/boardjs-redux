import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <div style={dropdownStyles} className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter per user
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.props.users.map(user => {
              return (
                <button
                  className="dropdown-item"
                  key={user.id}
                  style={userItemStyles}
                  onClick={() => this.props.updateFilter(user.id)}
                >
                  <img src={user.avatar} alt="" style={avatarStyles} />
                  <div style={nameStyles}> {user.first_name} </div>
                </button>
              );
            })}
            <button
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={() => this.props.updateFilter(null)}
            >
              Reset filter
              <span style={{ color: "red", float: "right" }}>X</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const userItemStyles = {
  cursor: "pointer"
};

const avatarStyles = {
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "inline-block",
  float: "right"
};

const nameStyles = {
  display: "inline-block",
  float: "left"
};

const dropdownStyles = {
  top: "10px",
  left: "10px",
  position: "absolute"
};

export default Filter;
