'use strict';
/////////////////////////////////////////

export default class VideoFactory {
    // CREATE ELEMENT VIDEO WITH CONTROLS, ROLE
    createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src',`medias/${element.photographerId}/${element.video}`);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-media';

        return eltVideo;
    }
}
