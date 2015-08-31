# craigslapper
Automate some sending of emails to Craigslist search results.

### Running it

1. Write your nice email in `index.coffee`.
2. `npm install -g coffee-script`
3. `coffee -c index.coffee`
4. Copy the contents of `index.js`, and place it into a bookmark, prepended with `javascript:`.
5. Navigate to a Craigslist search results page like [this one](http://sfbay.craigslist.org/search/sfc/sub?sort=date&min_price=500&max_price=900).
6. Click the bookmarklet.
7. Wait until the Mail app comes up ~60 times.
8. Hold `Cmd + Shift + D` to send off all messages.
