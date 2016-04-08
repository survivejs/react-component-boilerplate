import * as fs from 'fs';
import * as path from 'path';

import React from 'react';
import ReactDOM from 'react-dom/server';
import remark from 'remark';
import reactRenderer from 'remark-react';
import RemarkLowlight from 'remark-react-lowlight'

import js from 'highlight.js/lib/languages/javascript';

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
        {remark().use(reactRenderer, {
          remarkReactComponents: {
            code: RemarkLowlight({
              js
            })
          }
        }).process(readme)}
      </div>
    )
  };
}
