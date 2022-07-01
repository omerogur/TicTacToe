import React, { useEffect, useState } from 'react'
import Box from '../Box/Box'
import '../Board/board.css'
import Header from '../Header/Header'


let board = Array(9).fill("")
const Board = () => {

  //Oyunu Kazanabilecek olan değerleri array içine atıyoruz
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [box, setBox] = useState("X")
  const [winner, setWinner] = useState("")
  //  const [board,setBoard] = useState(Array(9).fill(""))
  const [wincol, setWincol] = useState([])



  //Hangi boxa tıkladığımızı index değişkeninden yakalıyoruz ve var olan box'ın değerini değiştiriyoruz(x ise o  , o ise x)
  const changeBoxValue = (index) => {
    if (box === "X") {
      board[index] = "X"           //Tıklanın indexe göre önceden tanımladığımız 9 elemanlı arrayin içini dolduruyoruz index numarasına göre
      setBox("O")
    } else {
      board[index] = "O"
      setBox("X")
    }
    win()  //her clickte win fonksiyonunu çağırıyoruz

  }
  


  //Kazanma durumunu kontrol
  const win = () => {
    if (board.length % 3 === 0) { //sürekli döngüye girerek zaman kaybetmemesi için oyun en erken 3 hamle ve katlarında kazanılabilir 
      for (let i = 0; i < winnerLines.length; i++) { //önceden hazırladığımız arrayi dönüyoruz
        let control = winnerLines[i]//kanazacak olan her arrayi geçici bir değişkene atıyoruz doldurduğumuz arrayda eşleşen array var mı diye kontrol ediyoruz.
        if (board[control[0]] === board[control[1]] && board[control[1]] === board[control[2]] && board[control[0]]) {
          let value = [control[0], control[1], control[2]] 
          console.log("kazanan array indeksi", value); //eşleşen değer olursa geçici olarak value değişkenine atıyoruz ve statelerin içine yolluyoruz
          setWinner(board[value[0]])
          setWincol(value)

        }

      }
    }
  }





  return (
    <>
      <div className='Container'>
        <Header winner={winner} />
        <div className='Row'>
          <Box index={0} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
          <Box index={1} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
          <Box index={2} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
        </div>

        <div className='Row'>
          <Box index={3} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
          <Box index={4} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
          <Box index={5} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
        </div>

        <div className='Row'>
          <Box index={6} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
          <Box index={7} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
          <Box index={8} boxValue={box} changeBoxValue={changeBoxValue} winner={wincol} />
        </div>

      </div>
    </>
  )
}

export default Board
