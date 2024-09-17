pm2 kill

cd /var/www/b-first-nextjs/dist/apps/b-first-desktop
pwd
PORT=4200 pm2 start npm --name "bf_desktop" -- start

cd /var/www/b-first-nextjs/dist/apps/b-first-mobile
pwd
PORT=4201 pm2 start npm --name "bf_mobile" -- start


