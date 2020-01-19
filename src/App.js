import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import GameIndex from "./gameIndex";
import LoginForm from "./components/LoginForm";
const NewGame = "http://localhost:3001/newgame";
class App extends Component {
  state = {
    player_1: "",
    player_2: "",
    gameOn: false,
    players: {}
  };
  login = (player_1, player_2) => {
    fetch(NewGame, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ players: { user_1: player_1, user_2: player_2 } })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ players: data });
      });

    console.log(`player 1: ${player_1} player 2: ${player_2}`);

    this.setState({ gameOn: !this.state.gameOn });
  };

  render() {
    return (
      <>
        <Header />
        {!this.state.gameOn && <LoginForm handleLogin={this.login} />}
        {this.state.gameOn && <GameIndex />}{" "}
      </>
    );
  }
}
export default App;