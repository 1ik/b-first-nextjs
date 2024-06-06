nx build b-first-desktop --prod
cp .env dist/apps/b-first-desktop
rsync -arvz -d dist/apps/b-first-desktop root@128.199.99.46:/var/www/b-first-nextjs/dist/apps
rsync -arvz -d dist/apps/b-first-desktop/.next/* root@128.199.99.46:/var/www/b-first-nextjs/dist/apps/b-first-desktop/.next
#rsync -arvz -d dist/apps/b-first-desktop/.nx-cache/* root@128.199.99.46:/var/www/b-first-nextjs/dist/apps/b-first-desktop/.nx-cache
ssh root@128.199.99.46 'pm2 restart bf_desktop'
