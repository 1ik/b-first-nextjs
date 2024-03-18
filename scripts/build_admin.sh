#!/bin/bash

echo 'NX build all projects';
nx build news-admin-panel --prod

echo 'Pushing';
rsync -arvz --delete dist/* root@128.199.99.46:/var/www/news-admin
