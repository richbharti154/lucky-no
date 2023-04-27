import React, {useState}from 'react'

function Game() {
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState('')

    const handleChange = (event) => {
        setGuess(event.target.value);     
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setGuess('')    

        const answer = parseInt(guess);
        if( answer < 1 || answer > 10){
            setMessage('Please type number between 1 to 10');
        }
        else if(answer < luckyNumber){
            setMessage('Your guess is too Low. Try again!');
            setAttempts(attempts + 1)
          }
          else{
              setMessage(`Congratulations! You guessed the right number which is ${luckyNumber} in ${attempts} attempts`);
              // setGuess(' ');
              setAttempts(0);
              setLuckyNumber(Math.floor(Math.random() * 10) + 1);
          }
      }
    return (
      <div>
        <h1>Lucky Number Game</h1>
        <form onSubmit={handleSubmit}>
          <label>Guess a Number between 1 to 10:</label>
        <input type='number' placeholder='Guess the Number' value={guess} onChange={handleChange}/>
        <button type='submit'>Match Number</button>
        </form>
        <p>{message}</p>
      </div>
    )
  }
  
  export default Game