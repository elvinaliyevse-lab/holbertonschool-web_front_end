# Flexbox

A one-page site and a blog post for a small design studio, Paperplane Studio, moved from floats and positioning to Flexbox one step at a time. Each task has its own page and stylesheet, built on the previous task. The images in `images/` are hand-made SVG; `pic-article-02.jpg` is rendered from one.

## Tasks

| # | Task | Files |
|---|------|-------|
| 0 | `.row` becomes a flex container; the `.row::after` clearfix and the `float: left` on `[class*='col-']` are removed | `0-index.html`, `0-styles.css` |
| 1 | `section-services`, `section-works`, `section-about-us`, `section-latest-news`, `section-testimonial` and `section-contact` classes on the outer section tags | `1-index.html`, `1-styles.css` |
| 2 | Latest news cards in reverse order with `flex-direction: row-reverse` | `2-index.html`, `2-styles.css` |
| 3 | Services merged into one `ul` that wraps with `flex-wrap: wrap` | `3-index.html`, `3-styles.css` |
| 4 | Gutters from `calc()` widths, `1rem` column margins and `-1rem` on `ul.row` | `4-index.html`, `4-styles.css` |
| 5 | Flex header: `.header-container` replaces the positioned logo and floated menu | `5-index.html`, `5-styles.css` |
| 6 | Flex navbar with spacing only between items (`.nav-item + .nav-item`) | `6-index.html`, `6-styles.css` |
| 7 | Logo and navbar centred with `align-items: center` | `7-index.html`, `7-styles.css` |
| 8 | Hero content centred in a flex column instead of padding | `8-index.html`, `8-styles.css` |
| 9 | About us columns centred with `align-self: center` | `9-index.html`, `9-styles.css` |
| 10 | Article page: hero styles split between `.section-hero` and `.hero-homepage` | `10-article.html`, `10-styles.css` |
| 11 | Article hero with background image, overlay, category and title | `11-article.html`, `11-styles.css` |
| 12 | Post layout: content next to an aside moved first with `order: -1` | `12-article.html`, `12-styles.css` |
| 13 | Post meta list and comma-separated tag list | `13-article.html`, `13-styles.css` |
| 14 | Share links in the aside, reusing the footer social list | `14-article.html`, `14-styles.css` |
| 100 | Article body (text, lists, figure, quote) and its styles | `100-article.html`, `100-styles.css` |
| 101 | Five boxes laid out with flexbox only | `101-index.html`, `101-style.css` |
