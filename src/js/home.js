const keepWatchingMediaCard = [
    {title:'Naruto', linkImg:'naruto_classic.jpg'},
    {title:'The chosen', linkImg:'the_chosen.jpg'},
    {title:'Os Pinguins de Madagascar', linkImg:'os_pinguins.jpg'},
    {title:'Anne With An E', linkImg:'anne_with_an_e.jpg'},
    {title:'Madagascar 2', linkImg:'madagascar2.jpg'},
    {title:'La Casa de Papel', linkImg:'la_casa_de_papel.jpg'},
    {title:'Angry Birds', linkImg:'angry_birds.png'},
    {title:'Naruto', linkImg:'naruto_classic.jpg'},
    {title:'The chosen', linkImg:'the_chosen.jpg'},
    {title:'Os Pinguins de Madagascar', linkImg:'os_pinguins.jpg'},
    {title:'Anne With An E', linkImg:'anne_with_an_e.jpg'},
    {title:'Madagascar 2', linkImg:'madagascar2.jpg'},
    {title:'La Casa de Papel', linkImg:'la_casa_de_papel.jpg'},
    {title:'Angry Birds', linkImg:'angry_birds.png'},
    {title:'The chosen', linkImg:'the_chosen.jpg'},
    {title:'Os Pinguins de Madagascar', linkImg:'os_pinguins.jpg'},
    {title:'Anne With An E', linkImg:'anne_with_an_e.jpg'},
    {title:'Madagascar 2', linkImg:'madagascar2.jpg'},
    {title:'La Casa de Papel', linkImg:'la_casa_de_papel.jpg'},
    {title:'Angry Birds', linkImg:'angry_birds.png'}
];

function createKeepWatching() {
    let section = document.getElementById('keepWatchingMediaCard');
    section.style.transition = 'transform 0.3s ease-in-out';

    keepWatchingMediaCard.forEach((e) => {
        let div = document.createElement('div');
        div.classList.add('mediaCard', 'position-relative');
        div.style.backgroundImage = `url(../assets/img/home/keepWatching/${e.linkImg})`;
        section.append(div);
    });

}

// Chama a função para criar os elementos
createKeepWatching();

    // Adiciona os eventos aos botões após a criação dos elementos
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let position = 0; // Largura do card + gap
    let count = 0;

nextBtn.addEventListener("click", () => {
    prevBtn.style.display = 'block';

    if (position !== 0) {
        position += 400;
        let section = document.getElementById('keepWatchingMediaCard');
        section.style.transform = `translateX(${position}px)`;
        count--;
        position == 0 ? nextBtn.style.display = 'none' : '';
    }
});

prevBtn.addEventListener("click", () => {
    nextBtn.style.display = 'block';

    let qtdCardsTela = (screen.width/380)+2;
    if (count < (keepWatchingMediaCard.length - qtdCardsTela)) {
        let section = document.getElementById('keepWatchingMediaCard');
        position -= 400;
        section.style.transform = `translateX(${position}px)`;      
        count++;
        count > (keepWatchingMediaCard.length - qtdCardsTela) ? prevBtn.style.display = 'none': '';
    }
        
});

