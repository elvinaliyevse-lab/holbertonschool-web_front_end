# Flexbox

A one-page site for a small design studio, Paperplane Studio, moved from a float grid to Flexbox one step at a time. Every task has its own page (`N-index.html`) and stylesheet (`N-styles.css`), each built on the previous one. The images in `images/` are hand-written SVG.

## Tasks

| # | Task | Files |
|---|------|-------|
| 0 | Add display flex: `.row` becomes a flex container; the `.row::after` clearfix and the `float: left` on `[class*='col-']` are removed | `0-index.html`, `0-styles.css` |
| 1 | Add `section-services`, `section-works`, `section-about-us`, `section-latest-news`, `section-testimonial` and `section-contact` classes to the outer section tags | `1-index.html`, `1-styles.css` |
| 2 | Show the Latest news cards in reverse order with `flex-direction: row-reverse` | `2-index.html`, `2-styles.css` |
| 3 | Merge the services into a single `ul` and wrap them with `flex-wrap: wrap` | `3-index.html`, `3-styles.css` |
| 4 | Space the flex items with `calc()` widths, a `1rem` margin on columns and `-1rem` on `ul.row` | `4-index.html`, `4-styles.css` |
