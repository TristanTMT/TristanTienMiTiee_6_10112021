'use strict';
/////////////////////////////////////////

export default class ImageFactory {
    // CREATE ELEMENT IMG WITH SRC, ROLE
    
    createHTML(element) {

        console.log(element);
          
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', `medias/${element.photographerId}/${element.image}`);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph-media';
        eltImage.setAttribute('alt' , `${element.title}`);

        

        return eltImage;
    }

}
