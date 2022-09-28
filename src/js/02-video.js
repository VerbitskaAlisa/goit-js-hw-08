import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY_CURRENT_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

    const player = new VimeoPlayer(iframe);

    player.on('timeupdate', throttle(savePlayTime, 1000));

   function savePlayTime (data) {
    localStorage.setItem(STORAGE_KEY_CURRENT_TIME, Math.floor(data.seconds));
   }

   let loadedTime = localStorage.getItem(STORAGE_KEY_CURRENT_TIME);
   if(loadedTime) {
    player.setCurrentTime(loadedTime);
   }
   
