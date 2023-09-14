import React, {useState} from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: "Choose the most familiar word.",
      answerOptions: [
        {answerText: "Study", value: "mag"},
        {answerText: "Exercise", value: "swdThf"},
        {answerText: "Public Service", value: "aco"},
        {answerText: "Violence", value: "thf"}
      ]
    },
    {
      questionText: "Choose the most familiar word.",
      answerOptions: [
        {answerText: "Change", value: "mag"},
        {answerText: "Conserve", value: "aco"}
      ]
    },
    {
      questionText: "Choose the most familiar word.",
      answerOptions: [
        {answerText: "Consumer", value: "acoSwdThf"},
        {answerText: "Seller", value: "mer"},
        {answerText: "Producer", value: "mag"}
      ]
    },
    {
      questionText: "Choose the most familiar word.",
      answerOptions: [
        {answerText: "Celebrity", value: "thf"},
        {answerText: "Prudence", value: "arc"}
      ]
    },
    {
      questionText: "Choose the most familiar word.",
      answerOptions: [
        {answerText: "Theory", value: "mag"},
        {answerText: "Experience", value: "swd"}
      ]
    },
    {
      questionText: "Choose the most familiar word.",
      answerOptions: [
        {answerText: "Past", value: "arc"},
        {answerText: "Reality", value: "merThf"},
        {answerText: "Future", value: "mag"}
      ]
    },
    {
      questionText: "To die with honour is better than to live in disgrace?",
      answerOptions: [
        {answerText: "Yes", value: "swd"},
        {answerText: "No", value: "merThf"}
      ]
    },
    {
      questionText: "You are often upset to see someone who is better than you.",
      answerOptions: [
        {answerText: "Yes", value: "mer"},
        {answerText: "No", value: "aco"}
      ]
    },
    {
      questionText: "You don't mind exploring dangerous places.",
      answerOptions: [
        {answerText: "Yes", value: "swd"},
        {answerText: "No", value: "mag"}
      ]
    },
    {
      questionText: "You are a leader-type person.",
      answerOptions: [
        {answerText: "Yes", value: "swd"},
        {answerText: "No", value: "arc"}
      ]
    },
    {
      questionText: `While exploring a dungeon, you encountered a dead end. As you examined a wall beside you, there was a stone button with a "Do Not Push" sign. Do you push it?`,
      answerOptions: [
        {answerText: "Yes", value: "thf"},
        {answerText: "No", value: "swd"}
      ]
    },
    {
      questionText: "You often see things that don't exist.",
      answerOptions: [
      {answerText: "Yes", value: "aco"},
      {answerText: "No", value: "mag"}
      ]
    },
    {
      questionText: "You feel you can fly when falling off a cliff.",
      answerOptions: [
        {answerText: "Yes", value: "aco"},
        {answerText: "No", value: "mag"}
      ]
    },
    {
      questionText: "Money talks; I can even buy a human being's favor if I wanted to.",
      answerOptions: [
        {answerText: "Yes", value: "mer"},
        {answerText: "No", value: "arc"}
      ]
    },
    {
      questionText: "As you check your schedule...",
      answerOptions: [
      {answerText: "You feel like a robot.", value: "swdThf"},
      {answerText: "You are proud and satisfied.", value: "acoMag"},
      {answerText: "Schedule... What schedule?", value: "arcMer"},
      ]
    },
    {
      questionText: "During Window shopping, you find a really interesting item in a store and you are debating whether to buy it or not.",
      answerOptions: [
      {answerText: "Think about if you need it.", value: "arc"},
      {answerText: "Check the price.", value: "mer"},
      {answerText: "Buy it without thinking twice.", value: "thf"}
      ]
    },
    {
      questionText: "You are responsible for a task that requires you to cooperate with many people.",
      answerOptions: [
      {answerText: "Handle it by myself even if it's hard.", value: "mag"},
      {answerText: "Ask friends for help.", value: "mer"}
      ]
    },
    {
      questionText: "You happened to find a girl who had fainted on the streets.",
      answerOptions: [
      {answerText: "Carry her to the hospital.", value: "aco"},
      {answerText: "Consider my priority before taking action.", value: "arcSwd"},
      {answerText: "Just ignore it.", value: "magMerThf"}
      ]
    },
    {
      questionText: `You happened to pick up some "Clothing"...`,
      answerOptions: [
      {answerText: "Check the brand.", value: "mer"},
      {answerText: "Wonder who lost it.", value: "aco"},
      {answerText: "Find the owner.", value: "mer"},
      {answerText: "Leave it where it was.", value: "mag"}
      ]
    },
    {
      questionText: "You happened to slip your tongue in the middle of a conversation.",
      answerOptions: [
      {answerText: "Pretend it was a joke.", value: "thf"},
      {answerText: "Change the subject.", value: "swd"},
      {answerText: "Analyse it.", value: "mag"},
      {answerText: "Apologise honestly.", value: "aco"}
      ]
    },
    {
      questionText: "You are on a trip with your beloved. He/she asks you to buy a souvenir that's not particularly needed.",
      answerOptions: [
      {answerText: "Buy the item for him/her.", value: "swd"},
      {answerText: `Say "No".`, value: "mer"},
      {answerText: "Promise to buy it next time.", value: "thf"}
      ]
    }
  ];
  const [questionCount, setQuestionCount] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [scores, setScores] = useState({
    acolyte: 0,
    archer: 0,
    mage: 0,
    merchant: 0,
    swordsman: 0,
    thief: 0
  })

  const result = (scores) => {
    return Object.keys(scores).reduce((a,b) => scores[a] > scores[b] ? a : b)
  }

  const reset = () => {
    setQuestionCount(1);
    setScores({
      acolyte: 0,
      archer: 0,
      mage: 0,
      merchant: 0,
      swordsman: 0,
      thief: 0
    });
    setShowScore(false)
  }
  


  const handleValues = (value) => {
    switch (value){
      case "aco":
        setScores({...scores, acolyte: scores.acolyte + 1});
        break;
      case "arc":
        setScores({...scores, archer: scores.archer + 1});
        break;
      case "mag":
        setScores({...scores, mage: scores.mage + 1});
        break;
      case "mer":
        setScores({...scores, merchant: scores.merchant + 1});
        break;
      case "swd":
        setScores({...scores, swordsman: scores.swordsman + 1});
        break;
      case "thf":
        setScores({...scores, thief: scores.thief + 1});
        break;
      case "swdThf":
        setScores({...scores, thief: scores.thief + 1});
        setScores({...scores, swordsman: scores.swordsman + 1});
        break;
      case "acoSwdThf":
        setScores({...scores, acolyte: scores.acolyte + 1});
        setScores({...scores, swordsman: scores.swordsman + 1});
        setScores({...scores, thief: scores.thief + 1});
        break;
      case "merThf":
        setScores({...scores, merchant: scores.merchant + 1});
        setScores({...scores, thief: scores.thief + 1});
        break;
      case "acoMag":
        setScores({...scores, acolyte: scores.acolyte + 1});
        setScores({...scores, mage: scores.mage + 1});
        break;
      case "arcMer":
        setScores({...scores, archer: scores.archer + 1});
        setScores({...scores, merchant: scores.merchant + 1});
        break;
      case "arcSwd":
        setScores({...scores, archer: scores.archer + 1});
        setScores({...scores, swordsman: scores.swordsman + 1});
        break;
      case "magMerThf":
        setScores({...scores, mage: scores.mage + 1});
        setScores({...scores, merchant: scores.merchant + 1});
        setScores({...scores, thief: scores.thief + 1});
        break;
    }
  }

  const handleAnswer = (value) => {
    if (questionCount < questions.length) {
    setQuestionCount(questionCount + 1)
    handleValues(value);
    } else {
    setShowScore(true);
  }
}

  return (
    <div className='quiz-container'>
      {(showScore === true) ? (
        <div className="score-section">
          Your job class is 
          <div className='job'><h1>{result(scores)}</h1></div>
          <div className='reset'>
            <button id="reset" onClick={reset}>Play Again?</button>
          </div>
        </div>
    ) : (
      <div className='container'>
        <div className="header">Ragnarok Online Quiz</div>
        <div className="question-tracker">
          Question {questionCount} out of {questions.length}
        </div>
        <div className='question-section'>
          {questions[questionCount-1].questionText}
        </div>
        <div className="answer-options">
          {questions[questionCount -1].answerOptions.map((answer) => 
            <button onClick={() => handleAnswer(answer.value)}> {answer.answerText}</button>
          )}
        </div>
      </div>
        )}
    </div>
  
)}

export default App;
