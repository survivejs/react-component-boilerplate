import * as fs from 'fs';
import * as path from 'path';

import React from 'react';
import ReactDOM from 'react-dom/server';
import MTRC from 'markdown-to-react-components';

export default function (rootPath, context, demoTemplate) {
  demoTemplate = demoTemplate || '';

  var tpl = fs.readFileSync(
    path.join(rootPath, 'lib/index_template.tpl'), 'utf8'
  );
  var readme = fs.readFileSync(
    path.join(rootPath, 'README.md'), 'utf8'
  );
  var replacements = {
    name: context.name,
    description: context.description,
    demo: demoTemplate,
    documentation: ReactDOM.renderToStaticMarkup(
      <div key="documentation">{MTRC(readme).tree}</div>
    )
  };

  return tpl.replace(/%(\w*)%/g, function(match) {
    var key = match.slice(1, -1);

    return typeof replacements[key] === 'string' ? replacements[key] : match;
  });
}
