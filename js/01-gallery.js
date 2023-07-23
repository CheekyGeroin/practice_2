import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createMarkup = (data) => {
  return data
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href=${original} noopener noreferrer nofollow>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
    })
    .join("");
};

const openModal = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src=${e.target.dataset.source}/>`,
    {
      onShow: (instance) => {},
    }
  );
};

const createGallery = (data) => {
  const markup = createMarkup(data);
  gallery.insertAdjacentHTML("beforeend", markup);

  gallery.addEventListener("click", openModal);
};

createGallery(galleryItems);
console.log(galleryItems);
