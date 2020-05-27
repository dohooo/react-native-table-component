#! /bin/bash
npm version '4.6.'$(date +%Y%m%d%H%M)
npm run build
npm publish --tag latest --access public
