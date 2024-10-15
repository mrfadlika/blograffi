import { h } from 'preact';
import Modal from '../Modal';
import { useExercise } from './ExerciseContext';

const ExerciseComponent = () => {
    const { answer, setAnswer, isModalOpen, isCorrect, handleSubmit, closeModal, config } = useExercise();
    const { options, question } = config;
  
    const modalMessage = isCorrect ? "Pintar banget lu asli!" : "Salah, belajar lagi ya!";
  
    return (
      <div className="container mt-1">
        <div className="card bg-secondary-subtle text-black">
          <div className="card-body text-center">
            <h3 className="card-title">Exercise</h3>
            <p className="text-center">{question}</p>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-center"
            >
              {options.map((option) => (
                <label
                  key={option}
                  className="form-check p-2 mb-2 w-75 d-flex justify-content-center align-items-center bg-secondary rounded jawaban-dihover"
                  htmlFor={option}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    id={option}
                    value={option}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ transform: "scale(1.5)" }}
                  />
                  <span
                    className="ms-3 text-white"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {option}
                  </span>
                </label>
              ))}
              <button type="submit" className="btn btn-success mt-3">
                Submit Answer »
              </button>
            </form>
          </div>
        </div>
        {isModalOpen && (
          <Modal 
            message={modalMessage} 
            onClose={closeModal} 
            answer={isCorrect ? "true" : "false"} 
          />
        )}
      </div>
    );
  };
  
  export default ExerciseComponent;