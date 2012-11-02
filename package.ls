description: 'Adds css styles pass-through support to Etherpad Lite.'
name: 'ep_stylish'
version: '0.0.1'
author:
  name: 'clkao'
  email: 'clkao@clkao.org'
dependencies: {}
engines:
  node: '*'
scripts:
  prepublish: '''
    ./node_modules/.bin/livescript -cj package.ls &&
    ./node_modules/.bin/livescript -bc -o static/js src/js
  '''
homepage: 'https://github.com/clkao/ep_stylish'
devDependencies:
  LiveScript: '1.1.x'
repository:
  type: 'git'
  url: 'git://github.com/clkao/ep_stylish.git'
