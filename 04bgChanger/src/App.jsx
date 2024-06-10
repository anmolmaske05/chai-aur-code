import React, { useState } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full  h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-full">
          <button onClick={() => { setColor("red") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => { setColor("green") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => { setColor("blue") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => { setColor("pink") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => { setColor("orange") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => { setColor("purple") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "purple" }}>Purple</button>

          <button onClick={() => { setColor("olive") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "olive" }}>olive</button>

          <button onClick={() => { setColor("white") }} className="outline-4 px-4 rounded-full py-1" style={{ backgroundColor: "white" }}>white</button>

          <button onClick={() => { setColor("gray") }} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "gray" }}>Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
