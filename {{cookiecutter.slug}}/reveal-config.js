// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
{% if cookiecutter.controls %}
    controls: true;
    controlsTutorial: {{ cookiecutter.controls_tutorial | default(true) | lower }},
    controlsLayout: '{{ cookiecutter.controls_layout | default("bottom-right") }}',
    controlsBackArrows: '{{ cookiecutter.controls_back_arrows | default("faded") }}',

{% endif %}
    progress: {{ cookiecutter.progress | default(true) | lower }},
    history: true,
    center: true,
    showNotes: {{ cookiecutter.show_notes | default(false) | lower }},

{% if cookiecutter.background is sameas true %}
    // Parallax background image
    parallaxBackgroundImage: '{{ cookiecutter.background_image }}',

    // Parallax background size
    parallaxBackgroundSize: '{{ cookiecutter.background_size }}', // CSS syntax, e.g. "2100px 900px"

{% endif %}
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || '{{ transition | default("fade") }}', // default/cube/page/concave/zoom/linear/fade/none

{% if cookiecutter.menu is sameas true %}
    menu: {
        themes: false,
        transitions: false,
        openButton: false,
        openSlideNumber: true,
        markers: true
    },

{% endif %}
{% if cookiecutter.keyboard is defined %}
{{ keyboard | tojson }},

{% endif %}
{% if cookiecutter.multiplex is sameas true %}
    multiplex: {
        secret: '{{ cookiecutter.multiplex_secret | default("null") }}',
        id: '{{ cookiecutter.multiplex_id }}',
        url: '{{ cookiecutter.multiplex_url | default("https://reveal-js-multiplex-ccjbegmaii.now.sh") }}'
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
{% if cookiecutter.multiplex is sameas true %}
        { src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
{% if cookiecutter.multiplex_secret %}
        { src: 'reveal.js/plugin/multiplex/master.js', async: true },
{% else %}
        { src: 'reveal.js/plugin/multiplex/client.js', async: true },
{% endif %}
{% endif %}
{% if cookiecutter.menu is sameas true %}
        { src: 'reveal.js-menu/menu.js', async: true, condition: function() { return !!document.body.classList; } },
{% endif %}
    ]
});

{% if cookiecutter.mouse is sameas true %}
      window.addEventListener("mousedown", handleClick, false);
      window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
      function handleClick(e) {
          e.preventDefault();
          if(e.button === 0) Reveal.next();
          if(e.button === 2) Reveal.prev();
      }
{% endif %}
