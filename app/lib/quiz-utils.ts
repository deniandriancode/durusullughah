import qss from "@/app/lib/quiz-examples";

function shuffle(chs: any) {
  return chs.sort(() => Math.random() - 0.5);
}

export function generateSampleQuestions() {
  const arr = shuffle(qss);
  arr.map((a: any) => {
    a.choices = shuffle(a.choices);
  });
  return arr;
}
