// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
    .map((galleryIt) =>
        `<a class="gallery__link" href=${galleryIt.original}> 
                <img class="gallery__image" src =${galleryIt.preview} alt="${galleryIt.description}"/>
        </a>
        `).join("");

gallery.insertAdjacentHTML("beforeend", galleryElements);
  
const lightbox = new SimpleLightbox(".gallery__link", { captionSelector: "img", captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });