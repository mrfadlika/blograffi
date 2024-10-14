import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';

const CodingChallenge = () => {
  const [editor, setEditor] = useState(null);
  const [userOutput, setUserOutput] = useState('');
  const [message, setMessage] = useState('');
  const [challenge, setChallenge] = useState({ output: '5', description: 'Hasilkan output:' });

  useEffect(() => {
    const editorInstance = CodeMirror(document.getElementById('editor'), {
      lineNumbers: true,
      mode: 'text/x-java',
      theme: 'monokai',
      value: `public class Solution {
  public static void main(String[] args) {
    // Tulis kode Java di sini
    System.out.println(solution());
  }

  public static String solution() {
    // Kode kamu
    return "";
  }
}`
    });
    setEditor(editorInstance);
  }, []);

  const handleSubmit = async () => {
    const userCode = editor.getValue();
    try {
      const response = await fetch('http://localhost:3000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: '7a46b49a6ed3f63c58b608540ab1c97',
          clientSecret: '62c88c62a2fde469695490506cf30f3961d1f57c3ac08004f39c6a69558ddb5',
          script: userCode,
          language: 'java',
          versionIndex: '0'
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      
      const result = data.output.trim();
      setUserOutput(result);
  
      if (result === challenge.output) {
        setMessage('Selamat! Jawaban kamu benar! 🎉');
      } else {
        setMessage('Jawaban kamu belum tepat. Coba lagi! 💪');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setUserOutput('Error: ' + error.message);
      setMessage('Ada kesalahan dalam menjalankan kode! 🐛');
    }
  };

  const generateNewChallenge = () => {
    const challenges = [
      { output: '10', description: 'Hasilkan output bilangan genap:' },
      { output: '7', description: 'Hasilkan output bilangan prima:' },
      { output: 'Hello, World!', description: 'Hasilkan output string:' },
      // Tambahkan lebih banyak tantangan di sini
    ];
    const newChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    setChallenge(newChallenge);
    setMessage('');
    setUserOutput('');
    editor.setValue(`public class Solution {
  public static void main(String[] args) {
    // Tulis kode Java di sini
    System.out.println(solution());
  }

  public static String solution() {
    // Kode kamu
    return "";
  }
}`);
  };

  return (
    <div className="container">
      <h2>Tebak Tebakan Coding Java</h2>
      <p>{challenge.description} <strong>{challenge.output}</strong></p>

      <div id="editor" style={{ height: '300px', marginBottom: '20px' }}></div>

      <button onClick={handleSubmit} className="btn btn-primary mr-2">
        Submit Kode
      </button>
      <button onClick={generateNewChallenge} className="btn btn-secondary">
        Tantangan Baru
      </button>

      <div className="output" style={{ marginTop: '20px' }}>
        <p>Output kamu: {userOutput}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default CodingChallenge;