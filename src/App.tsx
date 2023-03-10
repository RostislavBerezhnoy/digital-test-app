import React, { useState } from 'react'
import { FileViewer, FileViewerProps } from 'drivers'
import { docx, pdf, png } from './mocks'

function App() {
  const [file, setFile] = useState<FileViewerProps>(docx)

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', marginBottom: 30 }}>
        <button onClick={() => setFile(docx)}>show docx</button>
        <button onClick={() => setFile(pdf)}>show pdf</button>
        <button onClick={() => setFile(png)}>show png</button>
      </div>
      <FileViewer {...file} />
    </div>
  )
}

export default App
