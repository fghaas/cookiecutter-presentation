# Colors

(Or colours, if you prefer)

<!-- Note -->
This design uses just three primary colors:

* white and black, for text and background,
* blue, for controls and links.

The reasoning behind this is that blue is pretty well established as a
“default” color for links, and it is a color that can be easily
discerned from black even by most [color
blind](https://en.wikipedia.org/wiki/Color_blindness) people — except
in case of [total color
blindness](https://en.wikipedia.org/wiki/Achromatopsia), which is
several orders of magnitude rarer than the other, more prevalent forms.


## Charts

<canvas data-chart="line" data-chart-src="csv/chart-sample.csv"></canvas>

<!-- Note -->
In charts, you’ll frequently not be able to restrict yourself to just
the colors white, black and blue, and you will need to use other
colors (like red, in this example). 

Here, the red line for the **B** data series would be very hard to
discern, for a red/green blind person, from the black line for the
**A** series. The template tries to avoid such ambiguities by giving
you a pre-defined charts.js configuration for line charts that
distinguishes data series not only by their color, but also by their
line dash (black/solid, red/dashed, and blue/dotted).
