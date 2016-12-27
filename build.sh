#!/bin/bash

npm run build
npm run sass-prod

rm -rf build
mkdir build
mkdir build/img

cp index.html build
cp favicon.ico build
cp manifest.json build
cp img/* build/img
cp bundle.* build