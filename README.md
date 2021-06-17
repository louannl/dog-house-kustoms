# JobProjects

To help my productivity during lockdown on coding, I first decided to use
my current knowledge of vanilla css to implement a website from scratch, I
found a lot of faults in my code originally and better understood from this
how I should implement my code in future. Instead of carrying on with improving the
vanilla css code, I decided it was best to move on, I have many comments on
what went well and wrong originally in the code, please refer to the readme
for my learning from this.

## Please see readme in DogHouseKustoms


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

## Feedback on coding

## What didn't go well

Clippath proves to be very painful when maintaining a layout with responsiveness. In future I
don't believe I will use this, as it has a significant time cost to it.

Additionally for the second image: this would look fine in one resolution, then will show gaps between the image and the background at others, where the image height is shorter and does not
take into account the clippath slant.

Originally when testing in firefox the css was not pulling through, I found this was because I
was using full paths e.g. documents/etc.. - I originally used the long paths because the images
weren't pulling through, and this I am still not 100% on what originally caused that, perhaps I
was including '../' at the beggining where I didn't need to use it.

My original plan for mobile was to have the full screen be replaced by the mobile navigation
when clicked, however I wasn't sure how to implement this cleanly with the code I already have.
To spend less time on vanilla css, I decided it would be more fruitful to move on to learning
a framework and implementing what I've learnt from vanilla css.

## What went well

Although this is only the second time I've implemented a sticky nav, this was very easy for me to add in again.

This is my first time using flexbox, additionally I have not completed any tutorials on using it and just read notes etc. on how to implement it. Very early on I noticed that I wasn't
implementing this properly - however I still think it has gone well, and it has made it simpler when redesigning the views for smaller windows.

This is the first time I have designed something from scratch, and it has been very informative
on how I should layout my code, there are definitely parts of my code which need to be organised
more cleanly, such as my class names/using IDs instead of classes/using div classes
appropriatly.

I've definitly improved on utilising google and stackoverflow, where before I knew had a problem
but didn't quite now how to search for the anwser. Albeit, figuring out what was wrong with
the css in firefox was done with trial and error and rolling back the file on github if it didn't
work, as I couldn't find the solution online.

Upon looking at best practice, one comment was to use comments on the closing div to show what
div it is. I don't think this is neccesary because 1. any decent code editor etc. will show you
the closing div via lines and 2. I shouldn't be using divs so excessively that it's hard to tell what div is which.
