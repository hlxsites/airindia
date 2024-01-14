import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections?.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

function wrapNavDrops(navSections, parentSelector, linkTextClass) {
  const navDrops = Array.from(navSections.querySelectorAll(parentSelector));
  navDrops.forEach((navDrop) => {
    if (Array.from(navDrop.querySelectorAll('ul')).length === 0) {
      navDrop.classList.add('sub-link-text');
      return;
    }
    const textContent = navDrop.firstChild?.nodeValue?.trim();

    const wrapperElement = document.createElement('a');
    wrapperElement.classList.add(linkTextClass);
    wrapperElement.textContent = textContent;
    if (navDrop.firstChild) {
      navDrop.removeChild(navDrop.firstChild);
    }
    navDrop.insertBefore(wrapperElement, navDrop.firstElementChild);
    wrapNavDrops(navDrop, 'li', 'sub-link-title');
  });
}

function removeHeaderSearchBox() {
  const navTools = document.querySelector('.nav-tools');
  const search = navTools?.querySelector('.icon-search')?.parentNode;
  const navSections = document.querySelector('header #nav .nav-sections');
  search?.classList?.remove('header-nav-search-box-highlight');
  navSections?.classList?.remove('search-show');
  document.querySelector('.header-nav-search-box')?.remove();
}

function createSearchBox(label = 'Search') {
  const searchBoxHtml = `
  <div class="header-nav-search-box" id="header-nav-search-box">
    <span class="header-nav-search-box-close">&times;</span>
    <label for="search-box" class="header-nav-search-box-label" role="heading" aria-level="2">${label}</label>
    <input type="text" id="search-box">
    <a class="search-icon">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5801 19.29L16.8375 15.61C18.2903 13.8144 18.9938 11.5353 18.8035 9.24133C18.6131 6.94733 17.5433 4.81281 15.8141 3.27667C14.0849 1.74053 11.8277 0.919537 9.50656 0.982497C7.18545 1.04546 4.97689 1.98759 3.335 3.61517C1.69311 5.24275 0.742696 7.43207 0.679182 9.73295C0.615668 12.0338 1.44388 14.2714 2.99352 15.9855C4.54317 17.6997 6.69645 18.7601 9.01062 18.9488C11.3248 19.1375 13.6239 18.4401 15.4353 17L19.1477 20.68C19.2414 20.7738 19.353 20.8482 19.4759 20.8989C19.5989 20.9497 19.7307 20.9758 19.8639 20.9758C19.9971 20.9758 20.1289 20.9497 20.2519 20.8989C20.3748 20.8482 20.4864 20.7738 20.5801 20.68C20.762 20.4936 20.8636 20.2444 20.8636 19.985C20.8636 19.7257 20.762 19.4765 20.5801 19.29ZM9.77599 17C8.37935 17 7.01407 16.5895 5.85281 15.8203C4.69154 15.0511 3.78645 13.9579 3.25198 12.6788C2.7175 11.3997 2.57766 9.99226 2.85013 8.63439C3.1226 7.27653 3.79515 6.02925 4.78272 5.05028C5.7703 4.07131 7.02854 3.40463 8.39835 3.13453C9.76815 2.86443 11.188 3.00306 12.4783 3.53287C13.7686 4.06268 14.8715 4.95989 15.6474 6.11103C16.4234 7.26218 16.8375 8.61556 16.8375 10C16.8375 11.8565 16.0935 13.637 14.7692 14.9498C13.445 16.2625 11.6488 17 9.77599 17Z" fill="#D9000D"></path>
      </svg> 
    </a> 
  </div>`;
  const searchBoxWrapper = document.createElement('div');
  searchBoxWrapper.innerHTML = searchBoxHtml;
  const searchClose = searchBoxWrapper.querySelector('.header-nav-search-box-close');
  searchClose?.addEventListener('click', removeHeaderSearchBox);
  return searchBoxWrapper.firstElementChild;
}

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function openSubNavMobile(menu) {
  menu.setAttribute('aria-expanded', 'true');
  const menuTitle = menu.querySelector('.link-title')?.textContent || '';
  const menuWrapper = menu.closest('.default-content-wrapper');
  const subNavWrapper = document.createElement('div');
  subNavWrapper.classList.add('sub-nav-drop');

  const stickyWrapper = document.createElement('div');
  stickyWrapper.classList = 'sticky-wrapper';
  const goBack = document.createElement('a');
  goBack.textContent = 'Main Menu';
  goBack.classList.add('go-back');
  goBack.addEventListener('click', () => {
    subNavWrapper.classList.remove('transition');
    setTimeout(() => {
      subNavWrapper.remove();
    }, 500);
  });
  stickyWrapper.appendChild(goBack);

  const currentTitle = document.createElement('div');
  currentTitle.classList.add('current-menu-title');
  currentTitle.textContent = menuTitle;
  stickyWrapper.appendChild(currentTitle);
  subNavWrapper.appendChild(stickyWrapper);

  subNavWrapper.appendChild(menu.querySelector('ul')?.cloneNode(true));
  menuWrapper.insertBefore(subNavWrapper, menuWrapper.firstElementChild);
  setTimeout(() => {
    subNavWrapper.classList.add('transition');
  }, 0);
}

function delegateNavSectionsClick(e) {
  if (e.target.closest('.nav-drop') && !isDesktop.matches) {
    toggleAllNavSections(e.target.closest('.nav-sections'));
    openSubNavMobile(e.target.closest('.nav-drop'));
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('role', 'button');
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
    removeHeaderSearchBox();
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('role');
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
    /** Add Search option only for mobile menu */
    if (!document.querySelector('.header-nav-search-box')) {
      const searchBox = createSearchBox();
      navSections.insertBefore(searchBox, navSections.firstElementChild);
    }
  }
  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
  }
}

function handleNavSectionExpand(navSection, navSections, action = 'toggle') {
  if (isDesktop.matches) {
    const expanded = navSection.getAttribute('aria-expanded') === 'true';
    toggleAllNavSections(navSections);
    if (action === 'expand') {
      navSection.setAttribute('aria-expanded', 'true');
    } else if (action === 'collapse') {
      navSection.setAttribute('aria-expanded', 'false');
    } else {
      navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    }
  }
}

function headerSeachClickHandler(search, navSections) {
  if (document.querySelector('.header-nav-search-box')) {
    removeHeaderSearchBox();
    return;
  }
  const searchBox = createSearchBox('What are you looking for?');
  const nav = document.querySelector('header #nav');
  search.classList.add('header-nav-search-box-highlight');
  nav.insertAdjacentElement('beforebegin', searchBox);
  setTimeout(() => {
    searchBox?.classList?.add('show');
  }, 0);
  navSections.classList.add('search-show');
}

function decorateNavTools(navSections) {
  const navTools = document.querySelector('.nav-tools');
  navSections.insertBefore(navTools, navSections.firstChild);
  const navToolLists = Array.from(navTools.querySelectorAll('ul>li')) || [];
  navToolLists.forEach((list) => {
    if (list.querySelector('ul')) {
      list.addEventListener('mouseover', () => {
        list.setAttribute('aria-expanded', 'true');
      });
      list.addEventListener('mouseleave', () => {
        list.setAttribute('aria-expanded', 'false');
      });
    }
  });
  const search = navTools.querySelector('.icon-search')?.parentNode;
  if (search) {
    search.addEventListener('click', headerSeachClickHandler.bind(null, search, navSections));
  }
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll('.default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        handleNavSectionExpand(navSection, navSections);
      });
      navSection.addEventListener('mouseover', () => {
        handleNavSectionExpand(navSection, navSections, 'expand');
      });
      navSection.addEventListener('mouseleave', () => {
        handleNavSectionExpand(navSection, navSections, 'collapse');
      });
    });
    navSections.addEventListener('click', delegateNavSectionsClick);
    wrapNavDrops(navSections, '.nav-drop', 'link-title');
  }

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);

  decorateNavTools(navSections);
}
