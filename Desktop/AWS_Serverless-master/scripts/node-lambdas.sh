#!/bin/sh
echo "Started - lambda $1"

if [ "$1" = "build" ]; then
  cd $HOME_DIR/lambdas/fetch-s3-data && npm install
 
elif [ "$1" = "package" ]; then
  cd $HOME_DIR/lambdas/fetch-s3-data && zip -9rq fetch-s3-data.zip .

fi
echo "Ended - lambda $1"