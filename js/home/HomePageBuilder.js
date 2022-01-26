'use strict';
/////////////////////////////////////////

// import Filter from './FilterTags.js';
import Scroll from './Scroll.js';

// DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default class HomePageBuilder {
    
    // Build the photographers section, and the 'passer au contenu' button
    displayPhotographers(data) {
        let photographers = data.photographers;
        photographers.map(photographe => {
            console.log(photographe);
            let sectionPhotographers = document.getElementById('photographers');
            let articlePhotographers = document.createElement('article');
            articlePhotographers.className = 'articlePh';
            console.log(photographe.portrait);
            let templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p> 
            `;

            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.innerHTML = templatePhotographer;
        });
        
        new Scroll().scrollButton();
    }
}
