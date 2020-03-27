const ratingList = document.querySelector('.rating-list');
const ratingsStars = document.querySelectorAll('.rating-list-item');

const handleClickList = (e) => {
  if(e.target.nodeName !== "LI") return;
  const selectedElem = e.target.dataset.raiting;
  const ratingsStarsSelected = document.querySelectorAll('.select');

  for(let i= 0; i < ratingsStarsSelected.length; i++){
    ratingsStarsSelected[i].classList.remove('select');
  }

  for(let i = 0; i < selectedElem; i++){
    ratingsStars[i].classList.add('select');
  }

};

ratingList.addEventListener('click', handleClickList);