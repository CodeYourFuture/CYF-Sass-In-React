To keep our HTML semantic and valid, we provide different types of 'button' with common styles. We could switch over these types in one component, but it might be clearer to separate them. It might not.

### Button

`<button>` elements trigger actions on a page and submit forms. The only navigation they should trigger is to a 'submit confirmation' type page. To open menus, use buttons; for navigation, use anchor links.

### Anchor links

`<a href>` should take you to a new page or to a fragment position on the same page.

### Styled Div

`<div class="o-button'>` use this to nest a button styled div inside a block already wrapped by an anchor. See the card component for an example.
