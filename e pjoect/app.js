const music = new Audio(`audio/01.mp3`)
// music.play();

const songs =[
    {
        id:"01",
        songName: `Ajnabi <br>
                        <div class="subtitle">Atif aslam</div>`,
     poster: "img/ajnabi.jpg.jfif",
    },
    {
        id:"02",
        songName: `Shikwa <br>
                        <div class="subtitle">Talha yunus</div>`,
     poster: "img/shikwa1.jpg",
    },
    {
        id:"03",
        songName: `Living in the city <br>
                        <div class="subtitle">aleemrk</div>`,
     poster: "img/living in the city.jfif",
    },
    {
        id:"04",
        songName: `Leave me alone  <br>
                        <div class="subtitle">Taimor baig</div>`,
     poster: "img/leave me alone.jfif",
    },
    {
        id:"05",
        songName: `Pehli dafa<br>
                        <div class="subtitle">Atif aslam</div>`,
     poster: "img/pehli dafa.jfif",
    },
    {
        id:"06",
        songName: `Talk to me<br>
                        <div class="subtitle">Young stunner</div>`,
     poster: "img/talk to me.jpg",
    },
    {
        id:"07",
        songName: `Come througe<br>
                        <div class="subtitle">Talha yunus</div>`,
     poster: "img/come througe.jpg",
    },
    {
        id:"08",
        songName: `Jo To Na Mila<br>
                        <div class="subtitle">Asim azher</div>`,
     poster: "img/jo to na mila.jpg",
    },{
        id:"09",
        songName: `Dhundhala<br>
                        <div class="subtitle">Talwinder</div>`,
     poster: "img/dhundala.jfif",
    },
    {
        id:"10",
        songName: `Husn<br>
                        <div class="subtitle">Anuv jain</div>`,
     poster: "img/husn.jpg",
    },
    {
        id:"11",
        songName: `To hai kaha<br>
       <div class="subtitle">Uraan</div>`,
     poster: "img/to hai kaha.jfif",
    },
    {
        id:"12",
        songName: `12 Saal <br>
                        <div class="subtitle">Bilal Saeed </div>`,
     poster: "img/12 saal.jpg.jfif",
    },
    {
        id:"13",
        songName: `Aadat<br>
                        <div class="subtitle">Atif aslam</div>`,
     poster: "img/aadat.jfif",
    },
    {
        id:"14",
        songName: `Who lamhay<br>
                        <div class="subtitle">Atif aslam</div>`,
     poster: "img/who lamhe.jfif",
    },
    {
        id:"15",
        songName: `Ik lamha<br>
                        <div class="subtitle">Azaan sami</div>`,
     poster: "img/ik lamha.jfif",
    },
    {
        id:"16",
        songName: `Phir milangay <br>
                        <div class="subtitle">Young stunner</div>`,
     poster: "img/phir milangay.jpg",
    },
    {
        id:"17",
        songName: `Aplifier <br>
                       <div class="subtitle">Imran khan</div>`,
     poster: "img/aplifier.jpg",
    },
    {
        id:"18",
        songName: `Gumaan <br>
                        <div class="subtitle">Young stunner</div>`,
     poster: "img/gumaan.jfif",
    },
    
]

Array.from(document.getElementsByClassName("songitem")).forEach((e,i)=>{
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById("masterPlay");
let waves = document.getElementById("waves");

masterPlay.addEventListener("click",()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        waves.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");

    }else{
        music.pause();
        waves.classList.remove("active1");
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
})

const makeallbackground = () =>{
    Array.from(document.getElementsByClassName(`songitem`)).forEach((el)=>{
        el.style.background =`rgb(105, 105, 105,.0)`;
   })
}

const makeallplay = () =>{
    Array.from(document.getElementsByClassName(`playlistplay`)).forEach((el)=>{
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");

   })
}




let index = 0;
let poster_master_play = document.getElementById(`poster_master_play`);
let title = document.getElementById(`title`);
// index++;
// console.log(index);

Array.from(document.getElementsByClassName(`playlistplay`)).forEach((e)=>{
    e.addEventListener(`click`, (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        
        let songTitles = songs.filter ((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster,} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
        makeallbackground();
        Array.from(document.getElementsByClassName(`songitem`))[index-1].style.background=`rgb(105, 105, 105,.1)`;
        makeallplay();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        waves.classList.add("active1");


    });
})

let currentstart=document.getElementById(`currentstart`);
let currrentEnd=document.getElementById(`currrentEnd`);
let seek=document.getElementById(`seek`);
let bar2=document.getElementById(`bar2`);
let dot=document.getElementsByClassName(`dot`)[0];
    
    music.addEventListener(`timeupdate`,()=>{
        let music_curr = music.currentTime;
        let music_dur = music.duration;
        // console.log(music_curr);
        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);
        if (sec1<10) {
            sec1 = `0${sec1}`
            
        }
        currrentEnd.innerText=`${min1}:${sec1}`


        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);
        if (sec2<10) {
            sec2 = `0${sec2}`
            
        }
        currentstart.innerText=`${min2}:${sec2}`


        let progressbar = parseInt((music_curr / music_dur) * 100 );
        seek.value = progressbar;
        // console.log(seek.value);
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    });
    seek.addEventListener(`change`,()=>{
        music.currentTime = seek.value*music.duration / 100;
    });

    let volicon =document.getElementById("vol-icon");
    let vol =document.getElementById("vol");
    let volbar =document.getElementsByClassName("vol-bar")[0];
    let voldot =document.getElementById("vol-dot");

    vol.addEventListener(`change`,()=>{
        if (vol.value == 0 ) {
            volicon.classList.remove(`bi-volume-up-fill`);
            volicon.classList.remove(`bi-volume-down-fill`);
            volicon.classList.add(`bi-volume-off`);
        }
        if (vol.value > 0 ){
            volicon.classList.remove(`bi-volume-up-fill`);
            volicon.classList.add(`bi-volume-down-fill`);
            volicon.classList.remove(`bi-volume-off`);
        }
        if (vol.value > 50) {
            volicon.classList.add(`bi-volume-up-fill`);
            volicon.classList.remove(`bi-volume-down-fill`);
            volicon.classList.remove(`bi-volume-off`);  
        }
        let vol_a = vol.value;
        volbar.style.width = `${vol_a}%`;
          voldot.style.left = `${vol_a}%`;
          music.volume = vol_a / 100;
    });


    let back = document.getElementById("back");
    let next = document.getElementById("next");
  
    back.addEventListener(`click`,()=>{
        index -= 1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName(`songitem`)).length;
        }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        
        let songTitles = songs.filter ((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster,} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
        makeallbackground();
        Array.from(document.getElementsByClassName(`songitem`))[index-1].style.background=`rgb(105, 105, 105,.1)`;
        makeallplay();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        waves.classList.add("active1");

    })
next.addEventListener(`click`,()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName(`songitem`)).length) {
        index =1;
        
    }
       music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        
        let songTitles = songs.filter ((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster,} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
        makeallbackground();
        Array.from(document.getElementsByClassName(`songitem`))[index-1].style.background=`rgb(105, 105, 105,.1)`;
        makeallplay();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        waves.classList.add("active1");

})