const keepWatchingMediaCard = [
    {title:'Naruto', genero:'Anime', linkImg:'anime/naruto_classic.jpeg'},
    {title:'Gospel1', genero:'Gospel', linkImg:'gospel/The_chosen.jpg'},
    {title:'Anne With An E', genero:'Drama', linkImg:'drama/anne_with_an_e.jpg'},
    {title:'Angry Birds', genero:'Animação', linkImg:'animacao/Angry_birds.jpeg'},
    {title:'Gato de Botas', genero:'Animação', linkImg:'animacao/Gato_de_botas.jpeg'},
    {title:'Minions', genero:'Animação', linkImg:'animacao/Minions.jpeg'},
    {title:'Pokemon', genero:'Animação', linkImg:'animacao/Pokemon.jpeg'},
    {title:'The Flash', genero:'Ação', linkImg:'acao/the_flash.jpg'},
    {title:'The Witcher', genero:'Ação', linkImg:'acao/The_witcher.jpg'},
    {title:'Spiderverse', genero:'Ação', linkImg:'acao/spider_verse_spider.jpg'},
    {title:'One Piece', genero:'Anime', linkImg:'anime/One_piece.jpeg'},
    {title:'Naruto Shippuden', genero:'Anime', linkImg:'anime/Naruto_shippuden.jpeg'},
    {title:'One Punch Man', genero:'Anime', linkImg:'anime/One_Punch_Man.jpg'},
    {title:'Black Clover', genero:'Anime', linkImg:'anime/Black_clover.jpeg'},
    {title:'Hunter X Hunter', genero:'Anime', linkImg:'anime/HunterxHunter.jpeg'},
    {title:'Demon Slayer', genero:'Anime', linkImg:'anime/Demon_Slayer.jpg'},
    {title:'Avengers', genero:'Ação', linkImg:'acao/avengers.jpg'},
    {title:'Gospel3', genero:'Gospel', linkImg:'gospel/Gospel3.jpeg'},
    {title:'Gospel4', genero:'Gospel', linkImg:'gospel/Gospel4.jpeg'},
    {title:'Gospel5', genero:'Gospel', linkImg:'gospel/Gospel5.jpeg'},
];

const AllMediaCard = [
    {title:'The chosen', genero:'Gospel', linkImg:'gospel/The_chosen.jpg'},
    {title:'Gospel2', genero:'Gospel', linkImg:'gospel/Gospel2.jpeg'},
    {title:'Gospel3', genero:'Gospel', linkImg:'gospel/Gospel3.jpeg'},
    {title:'Gospel4', genero:'Gospel', linkImg:'gospel/Gospel4.jpeg'},
    {title:'Gospel5', genero:'Gospel', linkImg:'gospel/Gospel5.jpeg'},
    {title:'Gospel6', genero:'Gospel', linkImg:'gospel/Gospel6.jpeg'},
    {title:'Gospel7', genero:'Gospel', linkImg:'gospel/Gospel7.jpeg'},

    {title:'Angry Birds', genero:'Animação', linkImg:'animacao/Angry_birds.jpeg'},
    {title:'Gato de Botas', genero:'Animação', linkImg:'animacao/Gato_de_botas.jpeg'},
    {title:'Minions', genero:'Animação', linkImg:'animacao/Minions.jpeg'},
    {title:'Pokemon', genero:'Animação', linkImg:'animacao/Pokemon.jpeg'},
    {title:'Kung Fu Panda', genero:'Animação', linkImg:'animacao/kung_fu_panda.jpeg'},
    {title:'Madagascar 3', genero:'Animação', linkImg:'animacao/madagascar3.jpeg'},
    {title:'Shrek 1', genero:'Animação', linkImg:'animacao/shrek1.jpeg'},

    {title:'Naruto', genero:'Anime', linkImg:'anime/naruto_classic.jpeg'},
    {title:'One Piece', genero:'Anime', linkImg:'anime/One_piece.jpeg'},
    {title:'One Punch Man', genero:'Anime', linkImg:'anime/One_Punch_Man.jpg'},
    {title:'Black Clover', genero:'Anime', linkImg:'anime/Black_clover.jpeg'},
    {title:'Hunter X Hunter', genero:'Anime', linkImg:'anime/HunterxHunter.jpeg'},
    {title:'Demon Slayer', genero:'Anime', linkImg:'anime/Demon_Slayer.jpg'},
    {title:'Naruto Shippuden', genero:'Anime', linkImg:'anime/Naruto_shippuden.jpeg'},

    // {title:'Meu primeiro amor', genero:'Drama', linkImg:'meu_primeiro_amor.jpg'},
    // {title:'Extraordinario', genero:'Drama', linkImg:'extraordinario.jpg'},
    // {title:'O menino do pijama listrado', genero:'Drama', linkImg:'O_menino_do_pijama_listrado.jpg'},
    // {title:'A procura da felicidade', genero:'Drama', linkImg:'A_procura_da_felicidade.jpg'},
    // {title:'A cabana', genero:'Drama', linkImg:'a_cabana.jpg'},
    // {title:'Anne With An E', genero:'Drama', linkImg:'anne_with_an_e.jpg'},

    {title:'The Flash', genero:'Ação', linkImg:'acao/the_flash.jpg'},
    {title:'The Witcher', genero:'Ação', linkImg:'acao/The_witcher.jpg'},
    {title:'Spiderverse', genero:'Ação', linkImg:'acao/spider_verse_spider.jpg'},
    {title:'X-men', genero:'Ação', linkImg:'acao/x_men.jpg'},
    {title:'Jurassic Park', genero:'Ação', linkImg:'acao/jurassic_park.jpg'},
    {title:'Avengers', genero:'Ação', linkImg:'acao/avengers.jpg'},
    {title:'Batman', genero:'Ação', linkImg:'acao/batman_begins.jpg'},
    
];

function createKeepWatching(listContent) {

    let carousel = document.querySelector('.carousel');

    let buttonPrev = document.createElement('a');
    buttonPrev.classList.add('mb-4', 'prevBtn');

    let iconPrev = document.createElement('i');
    iconPrev.classList.add('fa-solid', 'fa-chevron-left', 'position-absolute', 'z-2', 'fs-2', 'text-light');

    buttonPrev.append(iconPrev);

    carousel.append(buttonPrev);

    let section = document.createElement('section');
    section.classList.add('d-flex', 'gap-4', 'position-relative', 'z-1', 'keepWatchingMediaCard');

    section.style.transition = 'transform 0.3s ease-in-out';
    carousel.append(section);

    listContent.forEach((e) => {
        
        let div = document.createElement('div');
        div.classList.add('mediaCard', 'position-relative');
        div.style.backgroundImage = `url(../assets/img/home/keepWatching/${e.linkImg})`;
        section.append(div);
    });

    let buttonNext = document.createElement('a');
    buttonNext.classList.add('nextBtn')

    let iconNext = document.createElement('i');
    iconNext.classList.add('fa-solid', 'fa-chevron-right', 'position-absolute', 'z-2', 'fs-2', 'text-light');

    buttonNext.append(iconNext);

    carousel.append(buttonNext);

}

// Chama a função para criar os elementos
createKeepWatching(keepWatchingMediaCard);





function createCarouselCategory(listContent, genero) {

    // alert('teste')
    let teste = document.querySelector('.teste');
    teste.style.backgroundColor = '#212529';

    let titleSection = document.createElement('h2');
    titleSection.textContent = genero;
    titleSection.classList.add('text-light', 'mb-3');

    teste.append(titleSection);

    // let carousel = document.querySelector('.carousel');
    let carousel = document.createElement('div');
    carousel.classList.add('carousel', 'd-flex', 'align-items-center', 'position-relative', 'mb-5');
    
    let buttonPrev = document.createElement('a');
    buttonPrev.classList.add('mb-4', 'prevBtn');
    
    let iconPrev = document.createElement('i');
    iconPrev.classList.add('fa-solid', 'fa-chevron-left', 'position-absolute', 'z-2', 'fs-2', 'text-light');
    
    buttonPrev.append(iconPrev);
    
    carousel.append(buttonPrev);
    
    let section = document.createElement('section');
    section.classList.add('d-flex', 'gap-4', 'position-relative', 'z-1', 'keepWatchingMediaCard');
    
    section.style.transition = 'transform 0.3s ease-in-out';
    carousel.append(section);
    
    listContent.forEach((e) => {
        if (e.genero == genero) {
            let div = document.createElement('div');
            div.classList.add('mediaCard', 'position-relative');
            div.style.backgroundImage = `url(../assets/img/home/keepWatching/${e.linkImg})`;
            section.append(div);
        }
    });
    
    let buttonNext = document.createElement('a');
    buttonNext.classList.add('nextBtn');

    let iconNext = document.createElement('i');
    iconNext.classList.add('fa-solid', 'fa-chevron-right', 'position-absolute', 'z-2', 'fs-2', 'text-light');

    buttonNext.append(iconNext);

    carousel.append(buttonNext);

    teste.append(carousel);

}


function created(){
    // alert('teste1')
    const generosUnicos = [...new Set(AllMediaCard.map(e => e.genero))];
    generosUnicos.forEach((e) => {
        createCarouselCategory(AllMediaCard, e);
    })
}

created();



    // Adiciona os eventos aos botões após a criação dos elementos
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");
    let position = 0; // Largura do card + gap
    let count = 0;

nextBtn.addEventListener("click", () => {
    prevBtn.style.display = 'block';

    if (position !== 0) {
        position += 400;
        let section = document.querySelector('.keepWatchingMediaCard');
        section.style.transform = `translateX(${position}px)`;
        count--;
        position == 0 ? nextBtn.style.display = 'none' : '';
    }
});

prevBtn.addEventListener("click", () => {
    nextBtn.style.display = 'block';

    let qtdCardsTela = (screen.width/380)+2;
    if (count < (keepWatchingMediaCard.length - qtdCardsTela)) {
        let section = document.querySelector('.keepWatchingMediaCard');
        position -= 400;
        section.style.transform = `translateX(${position}px)`;      
        count++;
        count > (keepWatchingMediaCard.length - qtdCardsTela) ? prevBtn.style.display = 'none': '';
    }
        
});