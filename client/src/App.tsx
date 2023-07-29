import React, { useState } from 'react';
import About from './components/window/components/About';
import MainWindow from './components/window';
import Footer from './components/window/components/Footer';
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const handleModeChange = (value: boolean) => {
    setDarkMode(value)
  }
  const handleAboutChange = (value: boolean) => {
    setShowAbout(value);
  }

  return (
    //bg-slate-50
    <div className={`flex flex-col justify-center transition duration-150 items-center h-screen ${darkMode ? "bg-[#202123]" : "bg-slate-50"}`}>
      <div className='flex flex-row p-2'>

        <MainWindow isDarkMode={darkMode} />
        <About showAbout={showAbout} darkMode={darkMode}/>
      </div>
      <Footer onPropChange={handleModeChange} onAboutChange={handleAboutChange} />
    </div>
  );
}

export default App;
