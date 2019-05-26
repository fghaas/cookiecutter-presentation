// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
{% if cookiecutter.controls == 'disable' %}
    controls: false,
{% else %}
    controls: true,
    controlsTutorial: {{ cookiecutter.controls_tutorial | default(true) | lower }},
    controlsLayout: '{{ cookiecutter.controls }}',
    controlsBackArrows: '{{ cookiecutter.back_arrows | default("faded") }}',

{% endif %}
    progress: {{ cookiecutter.progress | default(true) | lower }},
    history: true,
    center: true,
    showNotes: {{ cookiecutter.show_notes | default(false) | lower }},

    transition: '{{ cookiecutter.transition }}',

{% if cookiecutter.reveal_js_menu_version != 'disable' %}
    menu: {
        themes: false,
        transitions: false,
        openButton: false,
        openSlideNumber: true,
        markers: true
    },

{% endif %}

{% if cookiecutter.multiplex == 'enable' %}
     multiplex: {
        secret: multiplex_config['secret'],
        id: multiplex_config['socketId'],
        url: "{{ cookiecutter.multiplex_url }}"
     },

{% endif %}
    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
{% if cookiecutter.multiplex == 'enable' %}
        { src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
        { src: 'reveal.js/plugin/multiplex/client.js', async: true },
{% endif %}
{% if cookiecutter.reveal_js_menu_version != 'disable' %}
        { src: 'reveal.js-menu/menu.js', async: true, condition: function() { return !!document.body.classList; } },
{% endif %}
    ]
});
