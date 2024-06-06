nx build b-first-mobile --prod
rsync -arvz -d dist/apps/b-first-mobile root@128.199.99.46:/var/www/b-first-nextjs/dist/apps
rsync -arvz -d dist/apps/b-first-mobile/.next/* root@128.199.99.46:/var/www/b-first-nextjs/dist/apps/b-first-mobile/.next
rsync -arvz -d dist/apps/b-first-mobile/.nx-cache/* root@128.199.99.46:/var/www/b-first-nextjs/dist/apps/b-first-mobile/.nx-cache
