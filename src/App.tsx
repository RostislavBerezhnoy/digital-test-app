import React from 'react'
import { FileViewer } from 'drivers'

/* 
const files: { path: string; type: string }[] = [
  { path: 'http://localhost:3000/files/sample.docx', type: 'docx' },
  { path: 'http://localhost:3000/files/sample.pdf', type: 'pdf' },
  { path: 'http://localhost:3000/files/sample.png', type: 'png' },
] */

function App() {
  return <FileViewer type='docx' url='http://localhost:3000/files/sample.docx' />
}

export default App
