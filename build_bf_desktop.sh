nx build b-first-desktop --prod
cd dist/apps/b-first-desktop
PORT=4201 pm2 start npm --name "bfirst_desktop" -- start
