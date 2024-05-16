import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="container flex-auto min-w-full min-h-screen text-center mx-auto py-3 px-2 bg-gradient-to-r from-black to-slate-950">
      <img alt="logo" className="mx-auto py-2 z-20" width={170} src={electronLogo} />
      <h1 className="mb-[4.75px]"><strong className='text-5xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text font-light'>Powered by electron-vite</strong></h1>
      <div className="text-2xl text-pink-500">
        Build an Electron app with <span className="text-sky-600">React</span>
        &nbsp;and <span className="text-blue-700">TypeScript</span>
      </div>
      <p className="text-cyan-400/85 text-xl">
        Please try pressing <code className='bg-gradient-to-r from-fuchsia-400 via-orange-500 to-pink-500 text-transparent bg-clip-text'>F12</code> to open the devTool
      </p>
      <div className="mx-auto flex-auto justify-items-center space-x-4">
        <a href="https://electron-vite.org/" className='text-pink-550 text-xl' target="_blank" rel="noreferrer">
          Documentation
        </a>
        <a target="_blank" rel="noreferrer" className='text-pink-550 text-xl' onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
      <Versions></Versions>
    </div>
  )
}

export default App
