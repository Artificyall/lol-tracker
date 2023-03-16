import { useState } from "react"
import "./App.css"
import { Player } from "./Player"
import { SearchBar } from "./SearchBar"

function App() {
  const [query, setQuery] = useState("")
  const [method, setMethod] = useState("")

  return (
    <div className="App font-semibold">
      <h1 className="text-4xl text-center m-10 uppercase">League tracker</h1>
      <SearchBar setQuery={setQuery} setMethod={setMethod} />
      <Player query={query} method={method} />
    </div>
  )
}

export default App
