const trendingPrograms = [
    {title:'Anne whit E', linkImg:'anne.jpg'},
    {title:'Bridgerton', linkImg:'bridgerton.jpg'},
    {title:'Starnger Things', linkImg: 'starnger_things_temporada-5.jpg'},
    {title:'Elite', linkImg: 'Elite.jpg'},
    {title:'Peaky Blinders', linkImg: 'peaky-blinders.jpg'},
    {title:'Naruto', linkImg: 'naruto.jpg'}
]

const FrequentlyQuestions = [
    {id:1, title:'O que é a Netflix?', response:'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.'},
    {id:2, title:'Quanto custa a Netflix?', response:'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras.'},
    {id:3, title:'Onde posso assistir?', response:'Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.'},
    {id:4, title:'Como faço para cancelar?', response:'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.'},
    {id:5, title:'O que eu posso assistir na Netflix?', response:'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.'},
    {id:6, title:'A netflix é adequada para crianças?', response:'A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.'}
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

function createdCollapse(){
    FrequentlyQuestions.forEach(e => {
        let a = document.createElement('a');
        a.classList.add('btn', `collapseFrequentlyQuestions`, 'text-light', 'text-start', 'fs-3', 'd-flex', 'justify-content-between', 'align-items-center', 'ps-4', 'pe-4', 'rounded-0', 'mb-2');
        a.setAttribute('data-bs-toggle', 'collapse');
        a.setAttribute('href', `#collapseQuestions${e.id}`);
        a.setAttribute('role', 'button');
        a.setAttribute('aria-expanded', 'false');
        a.setAttribute('aria-controls', `collapseQuestions${e.id}`);
        a.setAttribute('onclick', 'clickedCollapse(this)')
        a.style.backgroundColor = '#2d2d2d';
        
        let span = document.createElement('span');
        span.textContent = e.title;

        let i = document.createElement('i');
        i.classList.add('fa-solid', 'fa-plus');

        a.append(span, i);
       
        let collapse = document.createElement('div');
        collapse.classList.add('collapse');
        collapse.setAttribute('id', `collapseQuestions${e.id}`);

        let card = document.createElement('div');
        card.classList.add('card', 'card-body', 'fs-4', 'rounded-0', 'mb-3');
        card.style.backgroundColor = '#2d2d2d';

        let p = document.createElement('p');
        p.textContent = e.response;

        card.append(p);
        collapse.append(card);

        document.getElementById('sectionFrequentlyQuestions').append(a, collapse);

    });
}

function clickedCollapse(elemento) {
    let i = elemento.querySelector('svg');

        if (i.classList.contains('fa-plus')) {
            i.classList.remove('fa-plus');
            i.classList.add('fa-xmark');
        } else {
            i.classList.remove('fa-xmark');
            i.classList.add('fa-plus');
        }
}

createdCollapse();