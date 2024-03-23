export default function menu() {
  const div = document.createElement('div');
  const menuOptions = document.createElement('div');

  menuOptions.innerHTML = `
  <div><h4>Chicken Soup</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>Price 1,99</span></div>
  <div><h4>Noodles</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>Price 1,99</span></div>
  <div><h4>Beef pie</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>Price 1,99</span></div>
  <div><h4>Meatless balls</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><span>Price 1,99</span></div>`;
  menuOptions.classList.add('menuOptions');

  div.appendChild(menuOptions);

  return div;
}
