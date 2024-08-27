# {{ cookiecutter.title }}
{{ cookiecutter.subtitle }}

* * *

{{ cookiecutter.author }} {% if cookiecutter.fediverse_handle %}| [@{{ cookiecutter.fediverse_handle }}](https://{{ cookiecutter.fediverse_handle.split("@")[1] }}/@{{ cookiecutter.fediverse_handle.split("@")[0] }}){% endif %}

{{ cookiecutter.event }} {% if cookiecutter.event_date %}| {{ cookiecutter.event_date }}{% endif %}

{{ cookiecutter.markdown_notes_separator }}
{{ cookiecutter.summary }}
