// quizData.js
export const quizzes = [
  { id: 1, title: 'General Knowledge Quiz' },
  { id: 2, title: 'Science Quiz' },
  { id: 3, title: 'History Quiz' },
  { id: 4, title: 'Literature Quiz' },
  { id: 5, title: 'Geography Quiz' },
];

// Quiz Questions for each quiz
export const questions = {
  1: [  // General Knowledge Quiz
    {
      question: 'What is the capital of France?',
      options: ['Madrid', 'Berlin', 'Paris', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Who is the first president of the United States?',
      options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
      answer: 'George Washington',
    },
    {
      question: 'Which of these is not a programming language?',
      options: ['Python', 'Java', 'HTML', 'C++'],
      answer: 'HTML',
    },
    {
      question: 'What is the largest continent?',
      options: ['Asia', 'Africa', 'Europe', 'North America'],
      answer: 'Asia',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
      answer: 'Mount Everest',
    },
  ],
  2: [  // Science Quiz
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 'H2O',
    },
    {
      question: 'What planet is closest to the sun?',
      options: ['Venus', 'Earth', 'Mercury', 'Mars'],
      answer: 'Mercury',
    },
    {
      question: 'Who developed the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      answer: 'Albert Einstein',
    },
    {
      question: 'What is the atomic number of Carbon?',
      options: ['6', '12', '8', '16'],
      answer: '6',
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Lungs', 'Skin', 'Brain'],
      answer: 'Skin',
    },
  ],
  3: [  // History Quiz
    {
      question: 'Who was the first emperor of China?',
      options: ['Qin Shi Huang', 'Kublai Khan', 'Wudi', 'Emperor Taizong'],
      answer: 'Qin Shi Huang',
    },
    {
      question: 'In which year did the Titanic sink?',
      options: ['1912', '1905', '1898', '1923'],
      answer: '1912',
    },
    {
      question: 'Who was the first woman to fly solo across the Atlantic?',
      options: ['Amelia Earhart', 'Sally Ride', 'Bessie Coleman', 'Harriet Quimby'],
      answer: 'Amelia Earhart',
    },
    {
      question: 'Who was the leader of the Soviet Union during World War II?',
      options: ['Joseph Stalin', 'Vladimir Lenin', 'Leon Trotsky', 'Mikhail Gorbachev'],
      answer: 'Joseph Stalin',
    },
    {
      question: 'Which war ended with the signing of the Treaty of Versailles?',
      options: ['World War I', 'World War II', 'The Civil War', 'The Franco-Prussian War'],
      answer: 'World War I',
    },
  ],
  4: [  // Literature Quiz
    {
      question: 'Who wrote "1984"?',
      options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'J.K. Rowling'],
      answer: 'George Orwell',
    },
    {
      question: 'Who wrote the "Harry Potter" series?',
      options: ['J.R.R. Tolkien', 'J.K. Rowling', 'George R.R. Martin', 'C.S. Lewis'],
      answer: 'J.K. Rowling',
    },
    {
      question: 'Who wrote "Pride and Prejudice"?',
      options: ['Jane Austen', 'Charlotte Brontë', 'Charles Dickens', 'Emily Dickinson'],
      answer: 'Jane Austen',
    },
    {
      question: 'What is the title of the first "Lord of the Rings" book?',
      options: ['The Fellowship of the Ring', 'The Two Towers', 'The Return of the King', 'The Hobbit'],
      answer: 'The Fellowship of the Ring',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Mark Twain', 'John Steinbeck', 'F. Scott Fitzgerald'],
      answer: 'Harper Lee',
    },
  ],
  5: [  // Geography Quiz
    {
      question: 'What is the capital city of Japan?',
      options: ['Seoul', 'Beijing', 'Tokyo', 'Osaka'],
      answer: 'Tokyo',
    },
    {
      question: 'Which continent is the Sahara Desert located in?',
      options: ['Asia', 'Africa', 'Australia', 'North America'],
      answer: 'Africa',
    },
    {
      question: 'What is the longest river in the world?',
      options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      answer: 'Nile River',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'South Korea', 'Japan', 'India'],
      answer: 'Japan',
    },
    {
      question: 'What is the largest island in the world?',
      options: ['Australia', 'Greenland', 'New Guinea', 'Borneo'],
      answer: 'Greenland',
    },
  ],
};