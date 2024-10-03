#!/bin/bash

echo "💃 Time to build the force-ui plugin ZIP file 🕺"

echo "Creating archive... 🎁"

zip -r force-ui.zip \
    dist \
    version.json \
    changelog.txt

echo "Done. You've built force-ui! 🎉 "