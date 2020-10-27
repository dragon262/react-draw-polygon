#!/bin/bash


npm run build 

rm -rf /notebooks/github/react-draw-polygon/templates/*
rm -rf /notebooks/github/react-draw-polygon/static/*

cp -R /notebooks/github/react-draw-polygon/front/build/* /notebooks/github/react-draw-polygon/templates/
cp -R /notebooks/github/react-draw-polygon/front/build/static/* /notebooks/github/react-draw-polygon/templates/static/