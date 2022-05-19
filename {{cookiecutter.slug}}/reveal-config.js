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
{% if cookiecutter.length_minutes %}

    totalTime: {{ cookiecutter.length_minutes }} * 60,
{% endif  %}
{% if cookiecutter.reveal_js_menu_version != 'disable' %}
    menu: {
        themes: {{ cookiecutter.menu_enable_theme_switch | default(true) | lower }},
{% if cookiecutter.reveal_js_version | first | int >= 4 %}
        themesPath: 'reveal.js/dist/theme',
{% else %}
        themesPath: 'reveal.js/css/theme',
{% endif %}
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
{% if cookiecutter.charts == 'enable' %}
    chart: {
        defaults: {
            global: {
                animation: null,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 24,
                        fontColor: 'black',
                    }
                }
            },
        },
        line: {
            borderColor: [
		"rgba(0,0,0,1)" ,
		"rgba(220,0,0,1)",
		"rgba(20,120,220,1)"
	    ],
            borderDash: [
		[],
		[10,5],
		[2,2]
	    ],
            backgroundColor: [
		"rgba(0,0,0,0.05)"
	    ],
        },
    },

{% endif %}
{% if cookiecutter.reveal_js_version | first | int < 4 %}
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
{% if cookiecutter.charts == 'enable' %}
        { src: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js' },
        { src: 'reveal.js-plugins/chart/csv2chart.js' },
{% endif %}
    ]
{% else %}
    plugins: [
	RevealMarkdown,
	RevealNotes,
	RevealHighlight,
        RevealZoom{% if cookiecutter.reveal_js_menu_version != 'disable' %},
        RevealMenu{% endif %}
    ]
{% endif %}
});
