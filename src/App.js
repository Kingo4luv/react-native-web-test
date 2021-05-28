import {useState, useEffect} from 'react'
import logo from './logo.svg';
import nigeria from './nigeria.svg';
import { Transition } from '@headlessui/react'
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showLast, setShowLast] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      hiddingFirst()
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hiddingFirst = () => {
    setTimeout(() => {
      setShowFirst(false);
      showingLast()
      
    }, 3000)
  }

  const showingLast = () => {
    setTimeout(() => {
       setShowLast(true);
    }, 1000)
  }

  return (
    <>
    <div className="App h-screen min-h-screen max-h-screen w-screen bg-gradient-to-b from-[#252b2f] to-home-light md:bg-gradient-to-r md:from-[#080D0F] md:via-home-dark md:to-home-light overflow-x-hidden" style={{filter: showModal ? 'blur(16px)' : ""}}>
       <div className="max-w-screen-xl h-full mx-auto flex items-start md:items-center mt-40 md:mt-0 px-0 sm:px-6">
         <Transition
         className="max-w-4xl mx-auto md:mx-0"
          show={showLast}
          enter="transition duration-500 ease-in-out"
          enterFrom="transform -translate-x-full"
          enterTo="transform -translate-x-0"
          leave="transition duration-500 ease-in-out"
          leaveFrom = "transform -translate-x-0"
          leaveTo="transform -translate-x-full"
        >
           <h2 className="text-white text-xl md:text-[58px] leading-normal lg:leading-[87px] font-bold text-center lg:text-left">
              Striving to ease the learning <br className="block md:hidden"/>process for any newbie <br className="block md:hidden"/>across <span className="text-[#7FD0FA]">Nigeria </span>
            </h2>
            <div className="mt-12 lg:mt-20 flex flex-col-reverse md:flex-row items-center justify-between max-w-xl mx-auto lg:mx-0 px-6 md:px-0">
              <button onClick={toggleModal} className="bg-[#7FD0FA] text-white  rounded-[5px] w-full md:w-[348px] h-auto px-6 py-3 lg:h-[55px] font-semibold text-lg">Notify  me when you launch</button>
              <p className="text-white text-lg mb-4">Our Mission</p>
            </div>
         
         </Transition>
         <Transition
          show={showFirst}
          className = "max-w-4xl mx-auto md:mx-0"
          enter="transition duration-500 ease-in-out"
          enterFrom="transform opacity-0 md:-translate-x-full"
          enterTo="transform opacity-100 md:-translate-x-0"
          leave="transition duration-500 ease-in-out"
          leaveFrom = "transform opacity-100 md:-translate-x-0"
          leaveTo="transform opacity-100 md:-translate-x-full"
        >
              <h2 className="text-[#F9F9F9] text-xl md:text-[64px] leading-normal lg:leading-[87px] text-center lg:text-left">
                  REACT NATIVE
                </h2>
                <p className="mb-4 text-[58px] text-[#7FD0FA]">Nigeria</p>
            </Transition>
          </div>
       <div className="fixed bottom-[-14%] sm:bottom-[-50%] lg:bottom-auto lg:top-1/4 lg:right-[-310px] px-20 md:px-0">
         <img src={logo} className="App-logo" alt="logo" />
         <div className="absolute inset-0 h-full w-full flex justify-center items-center">
           <Transition
          show={showLast}
          enter="transition duration-500 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
            <img src={nigeria} alt="nigeria" className="w-12 md:w-auto" />
          </Transition>
         </div>
       </div>
    </div>
    <Transition
      show={showModal}
      enter="transition duration-75 ease-out"
      enterFrom="transform opacity-0"
      enterTo=" opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 w-screen max-h-screen min-h-screen bg-[rgba(0,0,0,0.55)] flex justify-center items-center px-4 md:px-8">
         <div className="max-w-md py-[64px] px-4 md:px-10 font-bold rounded-2xl modal-color relative">
          <button onClick={toggleModal} className="absolute top-4 left-4 md:left-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

           <h2 className="text-xl md:text-[28px] leading-[35px] md:leading-[42px] text-white text-center">Get all the latest new <br className="hidden md:block"/>on react native <span className="text-[#7FD0FA]">Nigeria </span></h2>
           <input type="email" className="w-full border border-white bg-transparent rounded py-4 mt-12 text-base font-semibold px-4 placeholder-[rgba(255,255,255,0.18)]" placeholder="Email Address" />
            <button className="bg-[#7FD0FA] text-white  rounded-[5px] w-full h-auto px-6 py-4 font-semibold text-sm mt-12">Sign up</button>
         </div>
       </div>
    </Transition>
    </>
  );
}

export default App;
