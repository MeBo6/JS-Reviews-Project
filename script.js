const reviews = [
  {
    id: 1,
    fullname: "David Patel",
    job: "backend developer",
    img: "assets/pp4.webp",
    text: "Architecting robust server-side solutions with Python, Java, or Node.js. Data management, API development, and scalability are my expertise.",
  },

  {
    id: 2,
    fullname: 'Michael Rodriguez',
    job: 'frontend developer',
    img: 'assets/pp3.webp',
    text: "Crafting seamless user interfaces with HTML, CSS, and JavaScript. Pixel-perfect designs and intuitive interactions are my forte.",
  },

  {
    id: 3,
    fullname: 'Adam  Johnson',
    job: 'fullstack developer',
    img: 'assets/pp1.webp',
    text: "Bridging the gap between frontend and backend, I create end-to-end applications. From UI design to database integration, I bring ideas to life.",
  },

  {
    id: 4,
    fullname: 'Emily Thompson',
    job: 'UI/UX developer',
    img: 'assets/pp2.webp',
    text: "As a UI/UX developer, I strive to create intuitive interfaces that delight users, marrying aesthetics with functionality for optimal user experiences.",
  }
];

const img = document.getElementById('img');
const fullName = document.getElementById('user-fullname');
const job = document.getElementById('job');
const text = document.getElementById('review-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');


let currentReviewIndex = 0;


function updateReview() {
  const review = reviews[currentReviewIndex];
  img.src = review.img;
  fullName.innerText = review.fullname;
  job.innerText = review.job;
  text.innerText = review.text;
}


nextBtn.addEventListener('click', ()=>{
  currentReviewIndex++;

  if(currentReviewIndex === reviews.length){
    currentReviewIndex = 0;
  }

  updateReview();
});

prevBtn.addEventListener('click', ()=>{
  currentReviewIndex--;

  if(currentReviewIndex < 0){
    currentReviewIndex = reviews.length - 1;
  }

  updateReview();
});

randomBtn.addEventListener('click', ()=>{
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 4);
  currentReviewIndex = randomNumber;

  if(randomNumber === currentReviewIndex){
    randomNumber+=1;
  }
  updateReview();
});

console.log(Math.floor(Math.random() * 4))






