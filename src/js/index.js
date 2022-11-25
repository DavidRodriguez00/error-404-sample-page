const documentReady = () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
  const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__menu-link')];

  const heroTitle = document.querySelector('.hero__title');
  const heroLearnButton = document.querySelector('.hero__learn-button');
  const heroStarsImageContainer = document.querySelector('.hero__stars-image-container');
  const heroMoonImageContainer = document.querySelector('.hero__moon-image-container');
  const heroMountainsBehindImageContainer = document.querySelector('.hero__mountains-behind-image-container');
  const heroMountainsFrontImagecontainer = document.querySelector('.hero__mountains-front-image-container');
 };