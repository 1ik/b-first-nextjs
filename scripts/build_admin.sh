#!/bin/bash

echo 'NX build all projects'
if nx build news-admin-panel --prod; then
  echo 'Pushing'
  rsync -arvz --delete dist/* root@128.199.99.46:/var/www/news-admin
else
  echo 'NX build failed. Skipping pushing.'
fi