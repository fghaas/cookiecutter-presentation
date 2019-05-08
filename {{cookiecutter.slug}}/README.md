# {{cookiecutter.title}}
{{ cookiecutter.subtitle | default('') }}

{{ cookiecutter.summary }}

* * *

{% if cookiecutter.event %}Presented by {{ cookiecutter.author }} at {{ cookiecutter.event }}{% if cookiecutter.event_date %}, {{ cookiecutter.event_date }}{% endif %}{% endif %}

{% if cookiecutter.url %}Rendered slides from this presentation are at <{{ cookiecutter.url }}>.{% endif %}

* * *

Made with [Cookiecutter](https://cookiecutter.readthedocs.io/) from {{ cookiecutter._template }}.

License: {{ cookiecutter.license }}
