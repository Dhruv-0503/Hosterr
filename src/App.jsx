import Header from "./component/header"
import Body from "./component/body"
import Footer from "./component/footer"

function App() {

  return (
    <>
      <div className="bg-red-100 py-3 px-6 min-h-screen flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
