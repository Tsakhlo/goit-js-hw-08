import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframe);

const onPlay = function(data) {
    let time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time);
};

let currentTime = localStorage.getItem("videoplayer-current-time")

player.on("timeupdate", throttle(onPlay, 1000));
       player.setCurrentTime(currentTime).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
