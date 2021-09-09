const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
// ===== ADD MARKUP =====

const gallery = document.querySelector('.gallery');
const largeImage = document.querySelector('.lightbox__image');
const modal = document.querySelector('.lightbox');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');


const galleryMarkup = [];
for (let galleryItem of galleryItems) {
  galleryMarkup.push(`<li class ="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}" 
      alt="${galleryItem.description}"
      data-source="${galleryItem.original}"
      />
  </a>
  </li>`);
};
document.querySelector("ul").insertAdjacentHTML("beforeEnd", [...galleryMarkup].join(""));

// ===== OPEN MODAL =====

const openModal = () => {
  modal.classList.add('is-open');
  overlay.addEventListener('click', onOverlayClick);
  window.addEventListener('keydown', onEscPress); //cLOSE MODAL USING ESC
  };

// ===== CLOSE MODAL =====

const closeModal = () => {
  modal.classList.remove('is-open');
  overlay.removeEventListener('click', onOverlayClick);
  window.removeEventListener('keydown', onEscPress); //cLOSE MODAL USING ESC
};

const onGalleryClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  let imageRef = event.target;
  let largeImageURL = imageRef.dataset.source;
  largeImage.src = largeImageURL;
   openModal();
};

const onOverlayClick = event =>
  event.currentTarget === event.target ? closeModal() : '';

gallery.addEventListener('click', onGalleryClick);
closeBtn.addEventListener('click', closeModal);

// ===== CLOSE MODAL USING ESC =====

const onEscPress = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
}