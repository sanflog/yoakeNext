#!/usr/bin/sh

comment=$1

git add .
git commit -m "$comment"
git push origin $2
