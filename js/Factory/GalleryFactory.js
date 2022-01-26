'use strict';
/////////////////////////////////////////

import MediaFactory from './MediaFactory.js';
import Lightbox from '../photographers/LightBox.js';

export default class GalleryFactory {
    constructor() {
        this.totalLike = 0;
    }
    
    // build the gallery with the different medias and the lightbox
    builder(dataMedia) {
        // const id = window.location.search.split('id=')[1];
        const id = new URL(window.location.href).searchParams.get("id");
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedia.map(element => {
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);
                let workTemplate = "";
                console.log(element.image);
                if(element.image) {
                    workTemplate = `
                    <a href='#' title=${element.title}>
                    ${mediaHTML.outerHTML}
                    </a>
                    <div class="ph-work-elt-text">
                        <h2 class="ph-work-title">${element.title}</h2>
                        <span class="ph-work-price">${element.price} €</span>
                        <div class='ph-elt-like'>
                        <span class="ph-work-like">
                            <a class="like-counter">${element.likes}</a>
                        </span>
                        <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                        </div>
                    </div>
                    `;
                } else {
                    workTemplate = `
                    <a href='#' title=''>
                    ${mediaHTML.outerHTML}
                    </a>
                    <div class="ph-work-elt-text">
                        <span class="ph-work-price">${element.price} €</span>
                        <div class='ph-elt-like'>
                        <span class="ph-work-like">
                            <a class="like-counter">${element.likes}</a>
                        </span>
                        <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                        </div>
                    </div>
                    `;
                }
                
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("ph-work-elt");
                this.totalLike += parseInt(element.likes);
                currentMedia.push(mediaHTML.outerHTML);
                currentMediaName.push(element.title);
                (new Lightbox())
                .init(currentMedia, currentMediaName);
            }
        });
        return this;
    }
}
