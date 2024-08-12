import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function App({movies ,genres}) {
  return (
    <>
      <Header />
      <Main movies={movies} genres={genres}/>
      <Footer />
    </>
  )
}

export default App
