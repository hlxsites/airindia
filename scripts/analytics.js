import { EVENTS } from './utils/constants.js';
import { getPlaceholderDataFor } from './utils/headerUtils.js';
import { capitalize } from './utils/helpers.js';

export function getQueryParameters(url) {
  const urlParams = new URLSearchParams(url.split('?')[1]);
  let capturedParams = '';
  const marketingParms = getPlaceholderDataFor('marketingQueryParamsAnalytics') || '';
  const marketingParmsArr = marketingParms.split(',')?.map((item) => item?.trim?.() || '') || [];
  marketingParmsArr.forEach((param) => {
    if (urlParams.has(param)) {
      capturedParams += `${param}=${urlParams.get(param)}&`;
    }
  });
  capturedParams = capturedParams.slice(0, -1);

  return capturedParams;
}

export function pushToAdobeDataLayer(dataLayerObj) {
  window?.adobeDataLayer.push({
    ...dataLayerObj,
  });
}

function buildCommonDataLayer({ siteSection, pageType }) {
  return {
    pageName: document.title || '',
    pageURL: window.location.href,
    siteSection,
    siteSubSection: document.title || '',
    pageType,
    siteName: 'AirIndia Website',
    language: document.documentElement.lang || 'en',
    market: '',
  };
}

export function pushFooterLinkClickAnalytics({
  siteSection, pageType, clickName,
  clickComponentType, componentID, clickLocation,
  clickIcon, type, URL,
}) {
  const dataLayerObj = {
    event: 'Click',
    _airindia: {
      ...(buildCommonDataLayer({ siteSection, pageType })),
      clickInfo: {
        clickName,
        clickComponentType,
        componentName: '',
        componentID,
        clickLocation,
        ...(clickIcon && { clickIcon }),
      },
    },
    web: {
      webInteractions: {
        linkClicks: {
          value: 1,
        },
        name: clickName,
        type,
        URL,
      },
    },
  };
  pushToAdobeDataLayer(dataLayerObj);
}

export function pushPageLoadedAnalytics({ siteSection, pageType }) {
  const dataLayerObj = {
    event: 'pageLoaded',
    _airindia: {
      ...(buildCommonDataLayer({ siteSection, pageType })),
    },
    web: {
      webPageDetails: {
        URL: window.location.href,
        name: document.title || '',
        server: window.location.host,
        siteSection,
        pageViews: {
          value: 1,
        },
      },
    },
    marketing: {
      trackingCode: getQueryParameters(window.location.href),
    },
  };
  pushToAdobeDataLayer(dataLayerObj);
}

function AddclickEventToLinks() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    const isImage = e.target.tagName.toLowerCase() === 'img';
    const clickLocation = capitalize(e.target.closest('.block')?.dataset.blockName || 'Others');
    if (link) {
      const dataLayerObj = {
        siteSection: 'AEM Site Section',
        pageType: 'AEM Page',
        clickName: link.getAttribute('title') || link.textContent,
        clickComponentType: (link.localName === 'a' ? 'URL' : 'Button'),
        componentName: link.textContent,
        componentID: link.id,
        clickLocation,
        ...(isImage && { clickIcon: link.getAttribute('title') || link.textContent }),
        type: 'other',
        URL: link.href,
      };
      pushFooterLinkClickAnalytics(dataLayerObj);
    }
  });
}

function AddAdobeLaunchLoadedHandler() {
  window.addEventListener(EVENTS.ADOBE_LAUNCH_LOADED, () => {
    AddclickEventToLinks();
  });
}

AddAdobeLaunchLoadedHandler();
