import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import { Suspense } from 'react';
const customersPromise = fetch('/customers.json')
  .then(res => res.json())

function App() {


  return (
    <>
      <NavBar></NavBar>

      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>}>
        <Banner customersPromise={customersPromise}></Banner>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App