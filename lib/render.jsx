import * as fs from 'fs';
import * as path from 'path';

import React from 'react';
import ReactDOM from 'react-dom/server';
import remark from 'remark';
import reactRenderer from 'remark-react';

export default function (rootPath, context, demoTemplate) {
  demoTemplate = demoTemplate || '';

  var readme = fs.readFileSync(
    path.join(rootPath, 'README.md'), 'utf8'
  );

  return {
    name: context.name,
    description: context.description,
    demonstration: demoTemplate,
    documentation: ReactDOM.renderToStaticMarkup(
      <div key="documentation">
        {remark().use(reactRenderer).process(readme)}
      </div>
    )
  };
}
