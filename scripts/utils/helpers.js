/** @module utils/helpers */
/**
 * Parses a placeholder string
 * @param {string} placeholder
 * @returns {string}
 */
function parsePlaceholder(placeholder) {
  return placeholder.replace(/&lt;&lt;/g, '<<').replace(/&gt;&gt;/g, '>>');
}

/**
 * Finds all elements with the given text
 * @param {HTMLElement} element
 *  The element to search
 * @param {string} text
 * The text to search for
 * @returns {Array}
 * An array of objects with the parent element and the placeholder text
 */
function findElementsWithText(element, text) {
  const elementsWithText = [];
  const treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false,
  );

  while (treeWalker.nextNode()) {
    const regEx = new RegExp(`\\[<<${text}>>]`, 'g');
    const matches = regEx.exec(
      treeWalker.currentNode.textContent,
    );
    if (matches && matches[0]) {
      const ele = {
        parent: treeWalker.currentNode.parentNode,
        placeholder: matches[0],
      };
      elementsWithText.push(ele);
    }
  }
  return elementsWithText;
}

/**
 * Converts a string to camel case
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

export {
  findElementsWithText,
  toCamelCase,
  parsePlaceholder,
};
