import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('play', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(KEY));

