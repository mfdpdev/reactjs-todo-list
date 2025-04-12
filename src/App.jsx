import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ListProvider from './contexts/ListContext'
import ModalProvider from './contexts/ModalContext'

function App() {
  return (
    <>
      <div className="overflow-hidden relative flex flex-col justify-between bg-white max-w-md min-w-[320px] mx-auto h-dvh px-4 pb-6 pt-4 shadow-lg">
        <ListProvider>
          <ModalProvider>
            <Header />
            <Body />
            <Footer />
          </ModalProvider>
        </ListProvider>
      </div>
    </>
  )
}

export default App
