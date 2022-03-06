import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const style = {
    width: '200px',
    margin: '20px auto'
}

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]
        // if user clicks on occupied square or if game is won, just return
        if (winner || squares[i]) return null
        // put 'x' or 'o' in the clicked square
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setXisNext(!xIsNext) // its another player turn now
        setStepNumber(timeInHistory.length)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move:${move}` : 'Go to start!'
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={style}>
                <p>{winner ? 'Winner is: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game