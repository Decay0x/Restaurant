export default function home() {
  const div = document.createElement('div');
  const marketingStatement = document.createElement('h1');

  marketingStatement.textContent = `Welcome to our amazing restaurant. Feel free to browse around and get in touch with us in the fake details we have provided!`;
  marketingStatement.classList.add('marketingStatement');

  div.appendChild(marketingStatement);

  return div;
}
