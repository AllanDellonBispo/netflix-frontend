// const trendingPrograms = [
//     {title:'Anne whit E', linkImg:'../../assets/img/anne.jpg'}
// ]

function goToLogin(){
    window.location.href = './index.html';
}

// function createCarousel(){
//     trendingPrograms.forEach((e, index) => {
//         let carousel = document.createElement('div');
//         let cardCarosel = document.createElement('div');

//         carousel.classList.add('carousel');
//         cardCarosel.classList.add('cardCarosel', 'cardCaroselHover');

//         let h3 = document.createElement('h3');
//         h3.classList.add('w-100', 'text-start', 'text-danger');
//         h3.textContent = 'N';

//         let div = document.createElement('div');
//         div.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'h-75');

//         let span = document.createElement('span');
//         span.classList.add('fs-1');
//         span.textContent = index;

//         div.append(span);
//         cardCarosel.append(h3, div);
//         carousel.append(cardCarosel);
//     });
// }