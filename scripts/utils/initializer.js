import { fetchPlaceholders, loadCSS, loadScript } from '../aem.js';
import { findElementsWithText, toCamelCase } from './helpers.js';

/**
 * Loads external components
 * Components are defined in the text content of the page [componentName:type]
 * Script and Style paths are defined in the placeholders.json file
 * @param {*} node
 * @param {*} componentName
 */
export default async function loadExternalComponent(node, componentName) {
  const foundElements = findElementsWithText(node, componentName);
  if (foundElements.length > 0) {
    await fetchPlaceholders();
    [...foundElements].forEach(async (element) => {
      element.parent.innerHTML = element.parent.innerHTML.replace(
        toCamelCase(element.placeholder),
        `${window.placeholders?.default[`${toCamelCase(componentName)}Placeholder`]}`,
      );
      const scripts = window.placeholders?.default[`${toCamelCase(componentName)}Script`]?.split(',');
      if (scripts?.length > 0) {
        [...scripts].forEach((script) => {
          loadScript(script);
        });
      }

      const styles = window.placeholders?.default[`${toCamelCase(componentName)}Styles`]?.split(',');
      if (styles?.length > 0) {
        [...styles].forEach((style) => {
          loadCSS(style);
        });
      }
    });

    // TODO: remove this hack once we have a better solution
    setTimeout(() => document.dispatchEvent(new CustomEvent('DOMContentLoaded')), 1000);
  } else {
    console.info(`No [<<${componentName}>>] on the page.`);
  }
}
