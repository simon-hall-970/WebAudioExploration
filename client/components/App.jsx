import React from 'react'
import TestInterface from './TestingInterface'
import AudioContextWatcher from './AudioClock'

const App = () => {
  return (
    <>
      <AudioContextWatcher />
      <TestInterface />
    </>
  )
}

export default App
