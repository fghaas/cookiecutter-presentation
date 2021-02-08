# `cookiecutter-presentation`

A [Cookiecutter](https://cookiecutter.readthedocs.io) template based
on my [standard presentation
layout](https://github.com/fghaas/presentation-template).

To use:

```
pip install cookiecutter
cookiecutter gh:fghaas/cookiecutter-presentation
```

## Accessibility considerations

This template tries to be opinionated with respect to accommodating
attendees with limited vision or hearing. Among other things:

* It supports just two Reveal.js themes, both optimized for maximum
  contrast: `white` (white background, black text), and `black` (black
  background, white text).

* It allows no transition animations other than `fade`.

* It avoids the concurrent use of red and green, to accommodate people
  with [red-green color
  blindness](https://en.wikipedia.org/wiki/Color_blindness#Red-green_color_blindness),
  the most common type of color blindness.

* It gives you the opportunity to use multiplex in combination with
  speaker notes, so that people with a hearing impairment and/or
  severe short-sightedness have an opportunity to follow your talk
  using a personal device (like a laptop or tablet).


## Supported options
The options understood by this template are defined in
[cookiecutter.json](cookiecutter.json), which of course doesn’t
support comments. Thus, what follows is pseudo-JSON with interspersed
comments:

```javascript
/*
  cookiecutter.json: defines Cookiecutter configuration options.

  When running just "cookiecutter", you'll be prompted
  - with the variable name and the default value, for string variables;
  - with the variable name and a list of options, with the first
    option pre-selected, for list variables.

  When running "cookiecutter --no-input", a presentation will be
  generated for you with the default values.

  With "cookiecutter --replay", you'll get a presentation
  pre-populated with the most recently entered values.

  Since cookiecutter does not have an option to add explanations to
  the variable prompts, the comments in this file serve as
  documentation for each variable.
*/

{
    // The title of your presentation. This goes into the <title> tag
    // of index.html, into the README, on the intro slide, and into
    // the Open Graph og:title meta tag that social media sites like
    // Twitter and Facebook use when they display a snippet of your
    // presentation.
    "title": "Presentation Title",

    // The presentation subtitle. Goes into the README and on the
    // intro slide.
    "subtitle": "",

    // A short summary of your presentation. This goes into the README
    // and into the Open Graph og:summary meta tag.
    "summary": "Short presentation summary",

    // Your name. This goes into the README, and on the intro
    // slide.
    "author": "Your Name",

    // The event at which you are presenting. README and intro
    // slide.
    "event": "",

    // The event date. If non-empty, this also goes into the README
    // and on the intro slide.
    "event_date": "",

    // The license that applies to your presentation content. If you
    // select one of the Creative Commons options, the post-generation
    // hook will download the appropriate license and store it as your
    // LICENSE file. If you select "All rights reserved" (the
    // default), then the LICENSE file will contain just "All rights
    // reserved."
    "license": [
        "All rights reserved",
        "CC-BY",
        "CC-BY-SA",
        "CC-BY-NC",
        "CC-BY-NC-SA"
    ],

    // A shorthand title for your presentation. This is the name of
    // the directory that Cookiecutter generates.
    "slug": "{{ cookiecutter.title.lower().replace(' ', '_') }}",

    // The reveal.js theme. This is being very opinionated as it
    // allows only the high-contrast white and black themes.
    "theme": [
        "white",
        "black"
    ],

    // The reveal.js slide transition type. Again, this is being
    // opinionated as it allows only the "fade" transition, or none at
    // all.
    "transition": [
        "fade",
        "none"
    ],

    // Your GitHub username. This is also used in the default value
    // for the site URL.
    "github_username": "",

    // Your Twitter handle. If set, it is included on the intro slide
    // as a link to your Twitter profile.
    "twitter_handle": "",

    // The URL at which the rendered presentation is published. The
    // default assumes that you are publishing your presentation with
    // GitHub Pages, and that your GitHub repository name is identical
    // to the name of the directory Cookiecutter generates.
    "url": "https://{{ cookiecutter.github_username }}.github.io/{{ cookiecutter.slug }}",

    // Location of the control (forward/back/up/down) icons:
    // - Use "bottom-right" for the default behavior of displaying the
    //   controls in the bottom-right corner of the screen.
    // - Use "edges" for displaying the control icons at the edges of
    //   the screen instead. This is sometimes preferred if you want
    //   to optimize for mobile devices.
    // - Use "disable" to disable he controls altogether.
    "controls": [
        "disable",
        "bottom-right",
        "edges"
    ],

    // What to do with the arrows pointing backwards and upwards in
    // the controls:
    // - "faded" displays the back-arrows using reduced opacity.
    // - "visible" shows them with normal opacity.
    // - "hidden" hides them altogether.
    // This option is ignored if "controls" is set to "disable".
    "back_arrows": [
        "faded",
        "hidden",
        "visible"
    ],

    // Show a progress bar at the bottom of the screen.
    "progress": true,

    // Paths, relative to the repository root. You normally won't need
    // to override these.
    "css_path": "css",
    "fonts_path": "fonts",
    "images_path": "images",
    "markdown_path": "markdown",
    "scripts_path": "bin",

    // An icon or avatar to associate with the presentation. This
    // could be an image of the author, or a logo associated with the
    // event.
    "icon": [
        "{{ cookiecutter.images_path }}/icon.png",
        "{{ cookiecutter.images_path }}/author.jpg"
    ],

    // Horizontal section separator in Markdown files.
    "markdown_separator": "^\\n\\n\\n",

    // Vertical section separator in Markdown files.
    "markdown_vertical_separator": "^\\n\\n",

    // Separator between slide content and speaker notes in Markdown
    // files. "^Note:" is the default, but may be distracting if your
    // slide notes markdown is meant to be read on, for example, your
    // Git platform's web interface. In that case you might find the
    // alternative of using a comment preferable.
    "markdown_notes_separator": [
        "^Note:",
        "<!-- Note -->"
    ],

    // Enable multiplex mode. If enabled, a token is fetched from
    // multiplex_url, and a separate multiplex-master is created
	// to include the multiplex secret. You should always keep the
	// multiplex-master branch rebased on current master, so that
	// it only differs from the master branch by including the
	// multiplex master plugin, and the multiplex secret.
    "multiplex": [
	    "disable",
        "enable"
    ],

    "multiplex_url": "https://reveal-js-multiplex-ccjbegmaii.now.sh",

    // The reveal.js navigation mode:
    // - "default" enables the default behavior of navigating with
    //    up/down and left/right arrows, plus the space bar for
    //    sequentially going through all slides.
    // - "linear" removes the up/down navigation, and slides advance
    //    linearly.
    // - "grid" enables grid mode.
    // See https://github.com/hakimel/reveal.js/#navigation-mode for
    // more details.
    "navigation_mode": [
        "default",
        "linear",
        "grid"
    ],

    // Enable overview mode with the Esc key and pinch-zoom.
    "overview": true,

    // Show speaker notes in the rendered slides.
    "show_notes": false,

    // Enable on-the-fly generated charts via charts.js
    "charts": [
	    "disable",
	    "enable"
    ],

    // The reveal.js version to pull in via a submodule. Use either a
    // numbered release, "master" for the current stable branch, or
    // "dev" for the latest development code.
    "reveal_js_version": [
        "3.9.2",
        "master",
        "dev"
    ],

    // The reveal.js-menu version to pull in via a submodule. Use
    // either a numbered release, "master" for the current master
    // branch, or "disable" to disable reveal.js-menu altogether.
    "reveal_js_menu_version": [
        "1.2.0",
        "master",
        "disable"
    ],

    // When the menu plugin is enabled, also enable the theme switch
    "menu_enable_theme_switch": true,

    // The qrcodejs version to pull in via a submodule. Since qrcodejs
    // does not use numbered releases, use either "master", or
    // "disable" to disable qrcodejs altogether.
    "qrcode_js_version": [
        "master",
        "disable"
    ],

    // The highlight.js version to pull in via a submodule. Use either
    // a numbered release, "master" for the current master branch, or
    // "disable" to disable highlight.js altogether.
    "highlight_js_version": [
        "9.15.6",
        "master",
        "disable"
    ],

    // The reveal.js-plugins version to pull in via a submodule.
    // Since reveal.js-plugins does not use numbered releases,
    // use either "master", or "disable" to disable reveal.js-plugins
    // altogether.
    "reveal_js_plugins_version": [
        "master",
        "disable"
    ]
}
```

## Requirements and limitations

The [post-generation hook](hooks/post_gen_project.sh) relies on `curl`
and `git`, and pulls in reveal.js and related functionality with `git
submodule add`. If you cannot or don’t want to use `curl` and `git`,
you probably won’t find this template particularly useful.


## License

Just like Cookiecutter itself, this template is licensed under the BSD
3-clause license. See [LICENSE](LICENSE) for details.
