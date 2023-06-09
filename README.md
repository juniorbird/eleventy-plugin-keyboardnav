# eleventy-plugin-keyboardnav
Keyboard navigation for your eleventy site

I get keyboardShortcut if I precede eleventyNavigation
Can I then pass output that allows navigation to still take place?
yes, returning nav does

So:

All nav items must have a special class
The plugin builds the list of pages based on the pre-eleventynavigation setup
It then assigns the keypresses
	Which can be based upon config no problem
Then it has a `<script>` that runs `onLoad` that sets the visual tips
And there's a script that handles nav
Easy peasy
