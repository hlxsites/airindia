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

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

export {
  findElementsWithText,
  toCamelCase,
};
