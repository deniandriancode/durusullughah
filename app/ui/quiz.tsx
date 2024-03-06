"use client";

import { useState } from "react";
import clsx from "clsx";
import { generateSampleQuestions } from "@/app/lib/quiz-utils";

let sampq = generateSampleQuestions();

export default function Quiz() {
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [qnum, setQnum] = useState(0);

  const qs = sampq[qnum];

  function handleCheckAnswer(correct: boolean) {
    if (correct && !answered) {
      setScore(score+1);
    }
    setAnswered(true);
  }

  function handleNextQuestion() {
    setAnswered(false);
    if (qnum < sampq.length-1) {
      setQnum(qnum+1);
    } else {
      sampq = generateSampleQuestions();
      setQnum(0);
    }
  }

  const options = qs.choices.map((q: any) => {
    return <button onClick={() => handleCheckAnswer(q.correct)} className={clsx("rounded bg-blue-700 text-white", answered ? q.correct ? "bg-green-600" : "bg-red-600" : "")} key={q.id}>{q.text}</button>
  });

  return (
    <section>
      <div className="max-w-[576px] mx-auto">
        <p>{qs.prompt}</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {options}
        </div>
        { answered && <button onClick={handleNextQuestion} className="block rounded w-full my-2 bg-gray-200">Next Question</button> }
        <p>Score: {score}</p>
      </div>
    </section>
  );
}
