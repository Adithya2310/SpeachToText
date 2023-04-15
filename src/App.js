import React,{useState} from 'react'
import "./App.css"
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const App = () => {

  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [copyText,setCopyText]=useState('');
  const [isCopied, setCopied] = useClipboard(copyText,{
    successDuration:1000
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <div className="container">
        <h2>Speach to Text Converter</h2>
        <p>An WebApp that provides users with the ability to convert spoken words into written text with ease. This app is designed to allow users to speak into a microphone, and the app will transcribe their speech into text format in real-time.</p>
        <div className="main-content" onClick={()=>setCopyText(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
        <button onClick={setCopied}>
           {isCopied ? "Copied" : "Copy to clipboard"}
        </button>
        <button onClick={()=>SpeechRecognition.startListening({continuous:true,language:'en-IN'})}>StartListening</button>
        <button onClick={SpeechRecognition.stopListening}>StopListening</button>
        </div>
      </div>
    </div>
  )
}

export default App
