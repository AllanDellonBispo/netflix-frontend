const trendingPrograms = [
    {title:'Anne whit E', linkImg:'anne.jpg'},
    {title:'Bridgerton', linkImg:'bridgerton.jpg'},
    {title:'Starnger Things', linkImg: 'starnger_things_temporada-5.jpg'},
    {title:'Elite', linkImg: 'Elite.jpg'},
    {title:'Peaky Blinders', linkImg: 'peaky-blinders.jpg'},
    {title:'Naruto', linkImg: 'naruto.jpg'}
]

function createCarousel(){
    let carousel = document.createElement('div');
    carousel.classList.add('d-flex');

    trendingPrograms.forEach((e, index) => {
    
        let cardCarosel = document.createElement('div');
        cardCarosel.classList.add('m-3');
        
        carousel.classList.add('carousel');
        cardCarosel.classList.add('cardCarosel', 'cardCaroselHover');
        cardCarosel.style.backgroundImage = `url(../assets/img/${e.linkImg})`;
        

        let h3 = document.createElement('h3');
        h3.classList.add('w-100', 'text-start', 'text-danger');
        h3.textContent = 'N';
        h3.style.color = '2px solid black';
        h3.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.8)';

        let div = document.createElement('div');
        div.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'h-75');

        let span = document.createElement('span');
        span.style.fontSize = '64px'
        span.textContent = index+1;
        span.style.color = '2px solid black';
        span.style.textShadow = '0 0 10px rgba(0, 0, 0, 1)';

        div.append(span);
        cardCarosel.append(h3, div);
        carousel.append(cardCarosel);

        document.getElementById('carousel').appendChild(carousel);
    });
}

createCarousel();