// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: true,

    progress: true,
    history: true,
    center: true,
    showNotes: true,

    transition: 'fade',


    menu: {
        themes: true,
        themesPath: 'reveal.js/css/theme',
        transitions: false,
        openButton: true,
        openSlideNumber: true,
        markers: true
    },





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


    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },


        { src: 'reveal.js-menu/menu.js', async: true, condition: function() { return !!document.body.classList; } },


        { src: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js' },
        { src: 'reveal.js-plugins/chart/csv2chart.js' },

    ]
});
