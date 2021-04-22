import React, { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)

  function handleKurang() {
    setNumber(number - 1)
  }
  
  function handleTambah() {
    setNumber(number + 1)
  }

  return (
    <div className="app">
      <h2>{ number }</h2>
      <button onClick={ handleKurang }>Kurang</button>
      <button onClick={ handleTambah }>Tambah</button>
    </div>
  )
}