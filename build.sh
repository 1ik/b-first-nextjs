cd dist/apps/news-site
PORT=4200 pm2 start npm --name "next-js:web" -- start
