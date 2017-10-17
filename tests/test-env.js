import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import $ from "jquery";

configure({ adapter: new Adapter() });

// add request animation frame definition for
// test execution in node.
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

global.$ = $;
