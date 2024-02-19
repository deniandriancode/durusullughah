import { useState } from 'react';
import { getQuizExamples, shuffleArray } from '@/app/lib/quiz-utils';

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const quiz = getQuizExamples();

  function handleClick() {
    if (questionNumber+1 === quiz.length) {
      setQuestionNumber(0);
    } else {
      setQuestionNumber(questionNumber+1);
    }
  }
  
  const quizR = quiz.map(q => <p>{q.prompt}</p>);
  const choices = shuffleArray(quiz[0].choices).map(c => <button className="block bg-gray-300 m-2" onClick={handleClick} key={c.id}>{c.text}</button>);

  return (
    <div>
      {choices}
    </div>
  );
}
