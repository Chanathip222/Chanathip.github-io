const nextButton = document.querySelector('.next_btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/video_p1.mp4','videos/video_p2.mp4','videos/video_p3.mp4','videos/video_p4.mp4']

let index = 0;
nextButton.addEventListener('click', function () {

    index += 1
    video.scr = movieList[index];

    if (index === 3){
        index = -1;
    }
})