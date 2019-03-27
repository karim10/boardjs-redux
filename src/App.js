import React, { Component } from 'react';
import './App.css';
import { boardApp } from './redux/reducer';
import BoardContainer from './components/container/BoardContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(boardApp, applyMiddleware(thunk));
class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={titleStyles}>My Board</div>
        <Provider store={store}>
          <BoardContainer />
        </Provider>
      </div>
    );
  }
}

const titleStyles = {
  marginTop: "20px",
  fontWeight: "bold"
}

export default App;