import React, { Component } from "react";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Images from "./components/Images";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";



// Random shuffle
function randomCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    characters,
    score: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = randomCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
         
          score={this.state.score}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />

        
        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Col size="md-3 sm-6">
                <Images
                  key={character.id.toString()} // to string
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={character.id}
                  image={character.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
export default App;