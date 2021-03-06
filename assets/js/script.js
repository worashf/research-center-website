const teamMembers = [
  {
    name: 'Worash Abocherugn',
    profilePic: 'assets/images/worash.jpeg',
    position: 'Founder and CTO',
    rule: 'Practice practice practice build skills, work smart get the job done. ',

  }, {
    name: 'Dagmawi zewudu',
    profilePic: 'assets/images/dagm.jpeg',
    position: 'Founder and CTO',
    rule: 'Practice practice practice build skills, work smart get the job done. ',

  }, {
    name: 'Addis Kebede',
    profilePic: 'assets/images/addis.jpeg',
    position: 'Founder and CTO',
    rule: 'Practice practice practice build skills, work smart get the job done. ',

  }, {
    name: 'Sntayhu Boyamo',
    profilePic: 'assets/images/snte.jpeg',
    position: 'Founder and CTO',
    rule: 'Practice practice practice build skills, work smart get the job done. ',

  }, {
    name: 'Wakas Bule',
    profilePic: 'assets/images/waks.jpeg',
    position: 'Founder and CTO',
    rule: 'Practice practice practice build skills, work smart get the job done. ',

  }, {
    name: 'Tedla Adisu',
    profilePic: 'assets/images/tedla.jpeg',
    position: 'Founder and CTO',
    rule: 'Practice practice practice build skills, work smart get the job done. ',

  },
];

const menu = document.getElementById('hamburger');
const header = document.getElementById('main-header');
const mainNav = document.getElementById('main-nav');
const teamWrapper = document.getElementById('team-container');
const sticky = header.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    header.style.top = 0;
  } else {
    header.style.top = '5%';
  }
};

function toggleMenu() {
  header.classList.toggle('menu-overlay');
  menu.classList.toggle('open');
  mainNav.classList.toggle('hide-menu');
}

const createTeamMembers = () => {
  let teams = '';
  teamMembers.forEach((team) => {
    teams += `<div class="team">
  <img src="assets/images/chess.jpg" alt="" class="chess-img">
  <img src="${team.profilePic}"  alt= "${team.name} profile" class="profile-img">
  <div class="team-descption">
      <h3 class="team-name"> ${team.name} </h3>
      <p class="position">${team.position}</p>
      <p class="rule"> ${team.rule}</p>
  </div>
  </div>`;
  });
  teamWrapper.innerHTML = teams;
};

menu.addEventListener('click', toggleMenu);

createTeamMembers();