import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const boardDuplicate = [...board]
        // if user clicks on occupied square or if game is won, just return
        if (winner || boardDuplicate[i]) return null
        // put 'x' or 'o' in the clicked square
        boardDuplicate[i] = xIsNext ? 'X' : 'O'
        setBoard(boardDuplicate)
        setXisNext(!xIsNext) // its another player turn now
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game