import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="overflow-hidden relative flex flex-col justify-between bg-white max-w-md min-w-[320px] mx-auto h-screen px-4 py-6 shadow-lg">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
