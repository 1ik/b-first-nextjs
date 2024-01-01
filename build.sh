nx build news-site --prod
rsync -arvz --delete dist/apps/news-site/* root@159.89.181.241:/var/www/web
#ssh root@159.89.181.241 'cd /var/www/web && pm2 kill && pm2 start npm -- start'
