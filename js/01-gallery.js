import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const createMarkup = (data) => {
  return data
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
};

const onImgClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) {
    return;
  }
  console.log(e.target);

  const onEscPress = (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}"/>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  instance.show();
};

const createGallery = (data) => {
  const markup = createMarkup(data);
  gallery.insertAdjacentHTML("beforeend", markup);
  gallery.addEventListener("click", onImgClick);
};

createGallery(galleryItems);
