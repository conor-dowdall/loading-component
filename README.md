# Conor Dowdall | Web Dev

## A 'Loading Component' by Conor Dowdall

Find a live demo on GitHub Pages:

<https://conor-dowdall.github.io/loading-component/>

### Add to a Web Page

```html
<head>
  <!-- ... -->
  <script type="module" src="loading-component.mjs"></script>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <loading-component></loading-component>
  <!-- ... -->
</body>
```

### Style with CSS

The loading component is a block-level element. A width and height can be set, for example:

```css
loading-component {
  width: 30em;
  height: 30em;
}
```

#### Customize with CSS Custom Properties

```css
/* customize the 3D effect */
--perspective: <length>; /* default = 400px */

/* customize the 'loading' text */
--loading-text-font-size: <length>; /* default = 1.75em */
--loading-text-font-color: <color>; /* default = yellowgreen */
--loading-text-pulse-duration: <time>; /* default = 1s */

/* customize the atoms */
--atom-orbit-duration: <time>; /* default = 1.9s */
--atom-size: <length> | <length-percentage>; /* default = 20% */

--circle-1-color: <color>; /* default = orangered */
--circle-2-color: <color>; /* default = orange */
--circle-3-color: <color>; /* default = yellow */
--circle-4-color: <color>; /* default = yellowgreen */

--atom-tail-color-1: <color>; /* deafult = orange */
--atom-tail-color-2: <color>; /* deafult = lightgreen */
```

#### More CSS Custom Properties

```css
--circle-1-radius: <length> | <length-percentage>; /* default = 100% */
--circle-2-radius: <length> | <length-percentage>; /* default = 75% */
--circle-3-radius: <length> | <length-percentage>; /* default = 50% */
--circle-4-radius: <length> | <length-percentage>; /* default = 25% */

--circle-rotation-duration: <time>; /* default = 2s */
--circle-1-rotation-duration: <time>; /* default = var(--circle-rotation-duration) */
--circle-2-rotation-duration: <time>; /* default = calc(var(--circle-rotation-duration) / 2) */
--circle-3-rotation-duration: <time>; /* default = calc(var(--circle-rotation-duration) / 4) */
--circle-4-rotation-duration: <time>; /* default = calc(var(--circle-rotation-duration) / 8) */

--circle-border-size: <length>; /* default = 5px */
--circle-1-border-size: <length>; /* default = var(--circle-border-size) */
--circle-2-border-size: <length>; /* default = var(--circle-border-size) */
--circle-3-border-size: <length>; /* default = var(--circle-border-size) */
--circle-4-border-size: <length>; /* default = var(--circle-border-size) */
```

> I am attempting to fill a silent moment with non-relevant conversation.  
> &nbsp;&nbsp;&nbsp;&nbsp;- Lt. Cmdr. Data  
> &nbsp;&nbsp;&nbsp;&nbsp;Star Trek: The Next Generation
