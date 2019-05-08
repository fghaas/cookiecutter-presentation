#!/bin/sh

{% if cookiecutter.license ==  'CC-BY' %}
curl -s -o LICENSE -L https://creativecommons.org/licenses/by/4.0/legalcode.txt
{% elif cookiecutter.license ==  'CC-BY-SA' %}
curl -s -o LICENSE -L https://creativecommons.org/licenses/by-sa/4.0/legalcode.txt
{% elif cookiecutter.license ==  'CC-BY-NC' %}
curl -s -o LICENSE -L https://creativecommons.org/licenses/by-nc/4.0/legalcode.txt
{% elif cookiecutter.license ==  'CC-BY-NC-SA' %}
curl -s -o LICENSE -L https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.txt
{% else %}
echo "{{ cookiecutter.license }}" > LICENSE
{% endif %}

# We only want to run this the very first time the project is created.
if [ -e .git ]; then
    echo "Looks like there's already a git repository here, skipping initialization hook." >&2
    exit 0
fi

# Initialize git repo
git init
git add .
git commit -m "Initial commit" -m "Created with Cookiecutter from {{cookiecutter._template}}"

# Add git submodules
git submodule add https://github.com/hakimel/reveal.js
git -C reveal.js checkout {{cookiecutter.reveal_js_version}}
git add reveal.js
{% if cookiecutter.reveal_js_menu_version != 'disable' %}
git submodule add https://github.com/denehyg/reveal.js-menu
git -C reveal.js-menu checkout {{ cookiecutter.reveal_js_menu_version }}
git add reveal.js-menu
{% endif %}
{% if cookiecutter.qrcode_js_version != 'disable' %}
git submodule add https://github.com/davidshimjs/qrcodejs
git -C qrcodejs checkout {{cookiecutter.qrcode_js_version}}
git add qrcodejs
{% endif %}
{% if cookiecutter.highlight_js_version != 'disable' %}
git submodule add https://github.com/highlightjs/highlight.js
git -C highlight.js checkout {{cookiecutter.highlight_js_version}}
git add highlight.js
{% endif %}
git commit -m "Add submodules"
