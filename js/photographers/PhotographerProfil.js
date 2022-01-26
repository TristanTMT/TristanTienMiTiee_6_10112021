'use strict';
/////////////////////////////////////////

import Modal from './Modal.js';
import {Form} from './Form.js';

export default class PhotographerProfil {
    // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
    displayPhotographerProfil(data) {
        console.log(data);
        let photographersData = data.photographers;
        // const id = window.location.search.split('id=')[1];
        const id = new URL(window.location.href).searchParams.get("id");
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
        const sectionPhotographerProfil = document.getElementById('ph-profil-header');
        const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title=''><img src="${photographers[0].portrait}" alt="Photo du photographe"></a>
            </article>
            `;

        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
        new Modal().modal(photographersData);
        new Form().fields();
    }
}
