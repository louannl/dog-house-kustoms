# Dog House Kustoms Redesign
Original project: 
- JS & Jquery for navigation scroll
- HTML & CSS

Current Version:
- React
- CSS, using react modules and CSSTransition for animations.

Comments: 
Tailwind made it a lot easier to quickly style elements in my other projects.

## Known Issues
- Mobile navbar

At the moment, in a small amount of occurrences (smaller viewport heights), the mobile nav will cut off the last few navigation pages due to utilising viewport height, instead of dynamically using the rest of the viewport height. 

## Solved issues (for my reference)
- Centered content different on different browsers

Having been using Tailwind, I forgot to do a basic reset, which quickly solved this issue.

- Issue styling Iframe

Originally, I used an id to style the iframe, which didn't work in React modules. 

So I instead wrapped the frame in a div and styled it this way. 

- Navigation scroll not positioning correctly on mobile 

This was due to the mobile menu using the viewport height by pushing all content down. 

I instead changed the positioning to absolute, so it is over the content and doesn't displace it.

## Media queries blank copy (Switched to mobile first)
@media only screen and (min-width: 640px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 1024px) {}

@media only screen and (min-width: 1536px) {}


## Images used

<span>Photo by <a href="https://unsplash.com/@duncan2118?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">duncan adler</a> on <a href="https://unsplash.com/s/photos/motorcycle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

<span>Photo by <a href="https://unsplash.com/@aahubs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Aaron Huber</a> on <a href="https://unsplash.com/s/photos/mechanic?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Image by <a href="https://pixabay.com/users/splitshire-364019/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=407186">SplitShire</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=407186">Pixabay</a>

## Colour palette

#30A9DE
#EFDC05
#E53A40
#090707

## Inspiration for reference

https://onepagelove.com/cardea

https://asecustommotorcycles.co.uk/ase

http://sugarfirepie.com/
