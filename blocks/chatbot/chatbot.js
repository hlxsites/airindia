import moveElementToRoot from '../../scripts/utils/helpers.js';
import loadExternalComponent from '../../scripts/utils/initializer.js';

let shadowRoot = null;

// Function to handle style changes
function handleStyleChanges(mutationsList) {
  // eslint-disable-next-line no-restricted-syntax
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // New node (e.g., style element) added to the document
      const addedNode = mutation.addedNodes[0];
      if (addedNode.tagName === 'APP-AI-AGENT-ROOT') {
        // console.info('Injected element:', addedNode);
        moveElementToRoot(addedNode, shadowRoot);
      }
      // Check if it's a style element
      if (addedNode.tagName === 'STYLE') {
        // Retrieve the style content
        // const styleContent = addedNode.textContent;
        // Do something with the style content
        // console.info('Injected style:', styleContent);
        // moveFontStylesToHead(addedNode);
        moveElementToRoot(addedNode, shadowRoot);
      }
    }
  }
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // TODO: Remove below shadow DOM commented code once the approach is finalized
  // Create a shadow root for the specified element
  // const container = block;
  // shadowRoot = container.attachShadow({ mode: 'open' });

  // iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  // Create a MutationObserver with the callback function
  // const observer = new MutationObserver(handleStyleChanges);

  // Start observing changes in the document's child nodes (including styles)
  // observer.observe(document, { childList: true, subtree: true });

  loadExternalComponent('chatbot', block);
}
