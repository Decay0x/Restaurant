import './styles.css';
import home from './homepage';
import menu from './menu';
import about from './about';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const imgCredits = () => {
  const div = document.createElement('div');
  const anchor = document.createElement('a');
  anchor.textContent = `https://www.pexels.com/photo/empty-bar-filled-with-lights-260922 Thanks to Pixabay`;
  anchor.setAttribute(
    'href',
    'https://www.pexels.com/photo/empty-bar-filled-with-lights-260922'
  );
  anchor.setAttribute('target', '_blank');
  div.classList.add('credits');
  div.appendChild(anchor);
  return div;
};

const homepage = home();
const menupage = menu();
const aboutpage = about();

window.addEventListener('load', () => {
  content.appendChild(homepage);
  content.appendChild(imgCredits());
});

homeBtn.addEventListener('click', () => {
  content.replaceChildren(homepage, imgCredits());
});
menuBtn.addEventListener('click', () => {
  content.replaceChildren(menupage, imgCredits());
});
aboutBtn.addEventListener('click', () => {
  content.replaceChildren(aboutpage, imgCredits());
});

document.body.appendChild(content);
