import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import test from './scenes/test';
import { Code, LezerHighlighter } from '@motion-canvas/2d';
import { parser } from '@lezer/javascript';

Code.defaultHighlighter = new LezerHighlighter(parser);

export default makeProject({
  scenes: [test],
});
