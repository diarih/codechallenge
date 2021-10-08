import { getPost, getPosts, getRandomPic } from './helpers.js';

const elDaftarBerita = document.querySelector('#daftar-berita');

/**
 *
 * @param {String} thumbnail => url yang kita ambil menggunakan Unsplash API
 * @param {Object} post => object post yang kita ambil dari jsonplaceholder API
 * @returns DOM Element
 */
const createPostElement = (thumbnail, post) => {
  const elCol = document.createElement('div');
  const elCard = document.createElement('div');
  const elCardImg = document.createElement('img');
  const elCardBody = document.createElement('div');
  const elCardTitle = document.createElement('h5');
  const elCardBtn = document.createElement('a');

  elCol.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
  elCard.classList.add('card', 'w-100', 'my-3');
  elCardImg.classList.add('card-img-top');
  elCardBody.classList.add('card-body');
  elCardTitle.classList.add('card-title');
  elCardBtn.classList.add('btn', 'btn-primary', 'w-100', 'stretched-link');

  elCardImg.setAttribute('alt', 'skilvul');
  elCardBtn.innerHTML = 'Read More';

  elCardBody.appendChild(elCardTitle);
  elCardBody.appendChild(elCardBtn);
  elCard.appendChild(elCardImg);
  elCard.appendChild(elCardBody);
  elCol.appendChild(elCard);

  // EDIT HERE
  elCardImg.setAttribute("src", thumbnail)
  
  post.forEach(e => {
    elCardTitle.innerText = e.title;
    // console.log(e)
  });

  
  return elCol;
};

const renderPosts = async () => {
  // EDIT HERE
  for (let i = 1; i <= 16; i++) {
    
    let posts = await getPosts()
    // console.log(posts);
    let pic = await getRandomPic();
    let picture = pic
    console.log(picture)
    // console.log(pic);
    elDaftarBerita.append(createPostElement(picture, posts))
  }
};

renderPosts();