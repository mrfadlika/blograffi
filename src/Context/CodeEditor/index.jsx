import { Clipboard } from 'lucide-react';
import { useState } from 'preact/hooks';
import React from 'react';

const CodeEditor = ({ fileName, code }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="bg-dark text-light p-3 rounded shadow mb-4 position-relative">
      <div className="position-absolute" style={{ top: '12px', right: '12px' }}>
        {copied ? (
          <span className="text-success">Copied!</span>
        ) : (
          <Clipboard style={{cursor: "pointer"}} onClick={copyToClipboard} size={16}/>
        )}
      </div>
      {fileName && (
        <span className="text-secondary d-block mb-2">{fileName}</span>
      )}
      <pre className="m-0">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;