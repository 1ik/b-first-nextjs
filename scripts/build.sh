nx build b-first --prod
cd dist/apps/b-first
PORT=4201 pm2 start npm --name "bf_desktop" -- start
