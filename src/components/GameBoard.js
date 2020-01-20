import React, { Component, Fragment } from "react";
import Card from "./Card";

class GameBoard extends Component {
  singleWords() {
    const { pairsToRender, faceUp } = this.props;

    const singleWords = [];
    for (const pair of pairsToRender) {
      singleWords.push({
        pairId: pair.id,
        word: pair.english,
        lang: "english"
      });
      singleWords.push({
        pairId: pair.id,
        word: pair.chinese,
        lang: "chinese"
      });
    }

    // Shuffle the array of single words.
    singleWords.sort(() => 0.5 - Math.random());

    return singleWords;
  }

  render() {
    const { handleFaceUpCards, faceUpCardsArray, faceUpWords } = this.props;
    const singleWords = this.singleWords();
    return (
      <>
        <div className="container">
          <div className="row">
            {singleWords.map((singleWord, i) => {
              return (
                <Fragment key={`${singleWord.pairId}-${singleWord.lang}`}>
                  <div className="col">
                    <Card
                      singleWord={singleWord}
                      handleFaceUpCards={handleFaceUpCards}
                      faceUpCardsArray={faceUpCardsArray}
                      faceUpWords={faceUpWords}
                    />
                  </div>
                  {(i + 1) % 4 === 0 ? (
                    <>
                      <hr></hr>
                      <div className="w-100"></div>
                    </>
                  ) : (
                    ""
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default GameBoard;
