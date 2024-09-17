#!/bin/bash
rm -rf ../dist
echo "Unzipping"
unzip ../dist.zip
pm2 restart all
rm -rf ../dist.zip

