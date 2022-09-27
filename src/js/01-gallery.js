// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createImgGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImgGallery (image) {
    return image.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    `
}).join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionType: "attr",
    captionDelay: 250,
});


