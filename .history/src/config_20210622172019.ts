import fs from 'fs';

const res = fs.readFileSync(
  '/Users/zhangxing/src/is-docs-vodka-frame/src/styles/mixins.less',
  {
    encoding: 'utf-8',
  }
);

const variables = res.match(/^@(?!import).*:.*/gm);

const methods = res.match(/^\..*\(.*\)/gm);