#!/bin/bash

# Compile Sass and add generated CSS
SASS=`which pysassc || which sassc || which sass`
for scss in css/*.scss; do
    css=${scss/.scss/.css}
    $SASS -t expanded $scss $css
    git add $css
done
git commit -m "Add compiled CSS"
