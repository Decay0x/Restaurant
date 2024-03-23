export default function about() {
  const div = document.createElement('div');
  const aboutTab = document.createElement('div');

  aboutTab.innerHTML = `
  <h3>Founders</h3>
  <div>
   <h4>Marlys G. Stephens</h4>
   <p>363 Robinson Lane Columbus, OH 43215</p>
   <span>MarlysGStephens@teleworm.us</span>
  </div>
  <div>
   <h4>Joan K. Clark</h4>
   <p>2905 Heron Way Sheridan, OR 97378</p>
   <span>JoanKClark@jourrapide.com</span>
  </div>
  <div>
   <h4>Marybeth D. English</h4>
   <p>2775 Burton Avenue Memphis, TN 38104</p>
   <span>MarybethDEnglish@dayrep.com</span>
  </div>
  <div>
   <h4>Robert K. Walton</h4>
   <p>3180 Skinner Hollow Road Yoncalla, OR 97499</p>
   <span>RobertKWalton@armyspy.com</span>
  </div>`;
  aboutTab.classList.add('aboutTab');

  div.appendChild(aboutTab);

  return div;
}
