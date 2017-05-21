import { configure } from '@kadira/storybook';

require('../src/Welcome.story');

const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
