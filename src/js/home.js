const keepWatchingMediaCard = [
    {title:'Naruto', genero:'Anime', linkImg:'naruto_classic.jpg'},
    {title:'The chosen', genero:'gospel', linkImg:'the_chosen.jpg'},
    {title:'Os Pinguins de Madagascar', genero:'Animação', linkImg:'os_pinguins.jpg'},
    {title:'Anne With An E', genero:'Drama', linkImg:'anne_with_an_e.jpg'},
    {title:'Madagascar 2', genero:'Animação', linkImg:'madagascar2.jpg'},
    {title:'Angry Birds', genero:'Animação', linkImg:'angry_birds.png'},
    {title:'The Witcher', genero:'Ação', linkImg:'The_witcher.jpg'},
    {title:'Homem aranah no aranha verso', genero:'Animação', linkImg:'homem_aranha_aranha_verso.jpg'},
    {title:'The flash', genero:'Ação', linkImg:'flash.jpg'},
    {title:'One Piece Live Action', genero:'aventura', linkImg:'One_Piece_live_action.jpg'},
    {title:'One Piece', genero:'Anime', linkImg:'One_piece.jpg'},
    {title:'Naruto Shippuden', genero:'Anime', linkImg:'Naruto_shippuden.jpg'},
    {title:'Pets', genero:'Animação', linkImg:'pets.jpg'},
    {title:'Black Clover', genero:'Anime', linkImg:'black_clover.jpg'},
    {title:'Hunter X Hunter', genero:'Anime', linkImg:'hunter_x_hunter.jpg'},
    {title:'One Punch Man', genero:'Anime', linkImg:'One-Punch.jpg'},
    {title:'Demon Slayer', genero:'Anime', linkImg:'demon_slayer.jpg'},
    {title:'Kung Fu Panda 3', genero:'Animação', linkImg:'kung_fu_panda.jpg'},
    {title:'Minions 2', genero:'Animação', linkImg:'minions_2.jpg'},
    {title:'Resgate 2', genero:'Ação', linkImg:'resgate_2.jpg'},
];


const AllMediaCard = [
    {title:'The chosen', genero:'Gospel', linkImg:'the_chosen.jpg'},
    {title:'Naruto', genero:'Anime', linkImg:'naruto_classic.jpg'},
    {title:'Os Pinguins de Madagascar', genero:'Animação', linkImg:'os_pinguins.jpg'},
    {title:'Anne With An E', genero:'Drama', linkImg:'anne_with_an_e.jpg'},
    {title:'Madagascar 2', genero:'Animação', linkImg:'madagascar2.jpg'},
    {title:'Angry Birds', genero:'Animação', linkImg:'angry_birds.png'},
    {title:'The Witcher', genero:'Ação', linkImg:'The_witcher.jpg'},
    {title:'Homem aranah no aranha verso', genero:'Animação', linkImg:'homem_aranha_aranha_verso.jpg'},
    {title:'The flash', genero:'Ação', linkImg:'flash.jpg'},
    {title:'One Piece Live Action', genero:'Ação', linkImg:'One_Piece_live_action.jpg'},
    {title:'One Piece', genero:'Anime', linkImg:'One_piece.jpg'},
    {title:'Naruto Shippuden', genero:'Anime', linkImg:'Naruto_shippuden.jpg'},
    {title:'Pets', genero:'Animação', linkImg:'pets.jpg'},
    {title:'Black Clover', genero:'Anime', linkImg:'black_clover.jpg'},
    {title:'Hunter X Hunter', genero:'Anime', linkImg:'hunter_x_hunter.jpg'},
    {title:'One Punch Man', genero:'Anime', linkImg:'One-Punch.jpg'},
    {title:'Demon Slayer', genero:'Anime', linkImg:'demon_slayer.jpg'},
    {title:'Kung Fu Panda 3', genero:'Animação', linkImg:'kung_fu_panda.jpg'},
    {title:'Minions 2', genero:'Animação', linkImg:'minions_2.jpg'},
    {title:'Resgate 2', genero:'Ação', linkImg:'resgate_2.jpg'},
    {title:'Esquadrão 6', genero:'Ação', linkImg:'esquadrao_6.jpg'},
    {title:'Hancock', genero:'Ação', linkImg:'hancock.jpg'},
    {title:'Venom', genero:'Ação', linkImg:'Venom.png'},
    {title:'Velozes e Furiosos 6', genero:'Ação', linkImg:'velozes_e_furiosos_6.jpg'},
    {title:'A cabana', genero:'Drama', linkImg:'a_cabana.jpg'},
    {title:'Meu primeiro amor', genero:'Drama', linkImg:'meu_primeiro_amor.jpg'},
    {title:'Extraordinario', genero:'Drama', linkImg:'extraordinario.jpg'},
    {title:'O menino do pijama listrado', genero:'Drama', linkImg:'O_menino_do_pijama_listrado.jpg'},
    {title:'A procura da felicidade', genero:'Drama', linkImg:'A_procura_da_felicidade.jpg'},
    {title:'Quarto de guerra', genero:'Gospel', linkImg:'quarto_de_guerra.jpeg'},
    {title:'Deus não esta morto 2', genero:'Gospel', linkImg:'Deus_nao_esta_morto_2.jpg'},
    {title:'Amor de redencao', genero:'Gospel', linkImg:'amor_de_redencao.jpg'},
    {title:'No ritmo da fe', genero:'Gospel', linkImg:'no_ritmo_da_fe.jpg'},
    {title:'Jogada de rei', genero:'Gospel', linkImg:'jogada_de_rei.jpg'},
    
];

// Receber uma lista na função create
// Usar uma outra função que usa a função create porém em looping para criar todos os conteúdos

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
















function createKeepWatching2(listContent, genero) {

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


// tentar fazer uma busca dos Gêneros da list e trazer a quantidade ex: 7 gêneros
// percorre a list 7 vezes e fazer um filtro por categoria

function test(){
    // alert('teste1')
    const generosUnicos = [...new Set(AllMediaCard.map(e => e.genero))];
    generosUnicos.forEach((e) => {
        createKeepWatching2(AllMediaCard, e);
    })
}

test();





















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