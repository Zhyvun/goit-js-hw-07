import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1.1.
const galleryList = document.querySelector(".gallery");
const cardsItem = createCardsElement(galleryItems);
// 1.2.
galleryList.insertAdjacentHTML("beforeend", cardsItem);
//1.3.
function createCardsElement(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}
// console.log(cardsItem);

//2.1.
galleryList.addEventListener("click", onGalleryClick);
//2.2.
function onGalleryClick(event) {
  //зупини якщо тег не img
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //2.2.1.
  event.preventDefault();
  //2.2.2.
  const onCloseModal = (event) => {
    const ESC_KEY = "Escape";

    if (event.code === ESC_KEY) {
      instance.close();
    }
  };
  //2.2.3.
  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },

      onclose: () => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  instance.show();
}
console.log(galleryItems);
