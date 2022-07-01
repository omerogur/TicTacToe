import React, { useState } from 'react'
import '../Box/box.css'



const Box = ({ boxValue, changeBoxValue, index, winner }) => {
  const [value, setValue] = useState("")

  const changeValue = () => {
    //Üst staten gelen value değerini (x,y) alarak buradaki statin içine koyduk ve sayfaya bastık
    //Oyunu x ile başlattığımız için diğer sayfadan X değerini değiştirmek için changeBoxValue fonksiyonunu çağırdık ve indeks parametresiyle geri yolladık hangi indextekine tıkladığımızı öğrenip kontrol sağlayabilmek için
    if (value === "") {
      setValue(boxValue)
      changeBoxValue(index);
    }
  }

  //Kazanan sütundaki index numaralarıyla eşleşen indeksi bulup rengini değiştirdik
  const checkBoxWin = () => {
    for (let i = 0; i < 3; i++) {
      if (winner[i] === index) {
        let still = "box win"
        return still
      }
    }
  }
  let style = checkBoxWin()


  //winner ==="X" ?  "box xwin" : winner ==="O" ? "box owin" : "box"
  return (
    <div>
      <div className={style !== undefined ? "box win" : "box"} onClick={changeValue}>  <span className={value === "X" ? "xvalues" : "yvalues"}>{value}</span> </div>
    </div>
  )
}

export default Box
