import questions from '@/app/lib/quiz-examples';

export function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function getQuizExamples() {
  return shuffleArray(questions);
}
