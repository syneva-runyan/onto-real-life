// A temporary file to deal with
// react 16's dependency on requestAnimationFrame.

// add request animation frame definition for
// test execution in node.
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
