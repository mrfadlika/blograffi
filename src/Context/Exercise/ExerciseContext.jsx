import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children, config }) => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = answer === config.correctAnswer;
    setIsCorrect(correct);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ExerciseContext.Provider 
      value={{
        answer,
        setAnswer,
        isModalOpen,
        isCorrect,
        handleSubmit,
        closeModal,
        config
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => useContext(ExerciseContext);