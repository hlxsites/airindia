/** @module utils/helpers */

/**
 * Moves the element into a another root element
 * @param {*} elementToMove
 * @param {*} rootElement
 */
export default function moveElementToRoot(elementToMove, rootElement) {
  // Check if both elements exist
  if (elementToMove && rootElement) {
    // Move the element to the new parent
    rootElement.appendChild(elementToMove);
  } else {
    console.error('Invalid element or parent IDs');
  }
}
