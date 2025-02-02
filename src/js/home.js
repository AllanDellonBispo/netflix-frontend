const keepWatchingMediaCard = [
    {title:'Naruto', linkImg:'naruto_classic.jpg'},
    {title:'The chosen', linkImg:'the_chosen.jpg'},
    {title:'Os Pinguins de Madagascar', linkImg:'os_pinguins.jpg'},
    {title:'Anne Whith An E', linkImg:'anne_with_an_e.jpg'},
    {title:'Madagascar 2', linkImg:'madagascar2.jpg'},
    {title:'Lá casa de papel', linkImg:'la_casa_de_papel.jpg'},
    {title:'Angry Birds', linkImg:'angry_birds.png'}
]

function createKeepWatching(){

    let section = document.getElementById('keepWatchingMediaCard');

    keepWatchingMediaCard.forEach((e) => {
        let div = document.createElement('div');
        div.classList.add('mediaCard');

        div.style.backgroundImage = `url(../assets/img/home/keepWatching/${e.linkImg})`

        section.append(div);
    });
}

createKeepWatching();



{/* <div class="d-flex gap-4">
    <div class="mediaCard "></div>
</div> */}



// .mediaCard{
//     width: 350px;
//     height: 200px;
//     border-radius: 2%;
//     background-image: url(../../assets/img/home/keepWatching/naruto_classic.jpg);
//     background-size: cover;
// }




