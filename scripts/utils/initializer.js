import {
  fetchPlaceholders, loadCSS, loadScript, toCamelCase,
} from '../aem.js';

/**
 * Loads external components
 * Components are defined in the text content of the page [componentName:type]
 * Script and Style paths are defined in the placeholders.json file
 * @param {*} node
 * @param {*} componentName
 */
export default async function loadExternalComponent(componentName, element = document) {
  await fetchPlaceholders();
  element.innerHTML = `${window.placeholders?.default[`${toCamelCase(componentName)}Placeholder`]}`;
  const scripts = window.placeholders?.default[`${toCamelCase(componentName)}Script`]?.split(',');
  if (scripts?.length > 0) {
    [...scripts].forEach((script) => {
      loadScript(script, { defer: true }, element);
    });
  }

  const styles = window.placeholders?.default[`${toCamelCase(componentName)}Style`]?.split(',');
  if (styles?.length > 0) {
    [...styles].forEach((style) => {
      loadCSS(style, element);
    });
  }
}
