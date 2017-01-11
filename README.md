# add_active_link

## Javascript snippet for Rails projects that parses the url for the current page, and adds an 'active' class decoration to links that match the current page.

## Default configuration

By default this snippet is designed to work with Twitter Bootstrap v4 header navigation. However, you can target different elements in your page(s) by modifying the active_element variable. In the default it is targetting links within a line item within a header element with a class of navbar-nav.

```
var active_element = $("header .navbar-nav li a");
```