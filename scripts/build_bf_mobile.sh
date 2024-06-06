nx build b-first-mobile --prod
cp ../.env ../dist/apps/b-first-mobile
rsync -arvz -d dist/apps/b-first-mobile root@128.199.99.46:/var/www/b-first-nextjs/dist/apps
rsync -arvz -d dist/apps/b-first-mobile/.next/* root@128.199.99.46:/var/www/b-first-nextjs/dist/apps/b-first-mobile/.next
#rsync -arvz -d dist/apps/b-first-mobile/.nx-cache/* root@128.199.99.46:/var/www/b-first-nextjs/dist/apps/b-first-mobile/.nx-cache
ssh root@128.199.99.46 'pm2 restart bf_mobile'
