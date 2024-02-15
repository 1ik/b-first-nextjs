nx build b-first --prod
cd dist/apps/b-first
PORT=4200 pm2 start npm --name "next-js:web" -- start
