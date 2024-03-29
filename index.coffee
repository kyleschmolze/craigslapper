subject = 'This guy Kyle wants to live in your place!'
body = """Hello there!

My name is Kyle, I saw your post on Craigslist, and would love if you'd consider my application as a roommate! (Is this an application? It's just an email, but it definitely always feels like I'm applying to something). 

Some info about me: I'm an optimistic and pretty energetic guy, I play a lot of ultimate frisbee, I bike everywhere, and I love dogs and cats. I'm also a vegetarian, but not the kind who pays attention to what people around me are eating. But yea so I eat a lot of sweet potatoes and make burritos at least 5 times a week (especially now that I've mastered the breakfast burrito). I drink and love coffee, play a decent amount of chess (for fun only), and have wonderful relationships with Beethoven, David Foster Wallace, and Stanley Kubrick. I'm 26.

Work stuff: I'm a co-founder of a startup called Groupmuse, which is a network of classical music house concert parties. I spend most of my days coding, helping connect local classical music groups with living-room-owners so that we can get as many of these concerts happening as possible, and then I end up going to a lot of said concerts because they're super fun. If we live together, you can expect regular invites to house concerts. No pressure to actually come, of course.

A bit of what I'm looking for: friendly faces, mostly. I am quite successful at getting along with almost everyone I meet, as long as they are generally respectful. Bonus points if you like to talk about music, books, film, or startups! I would like to live somewhere medium-to-long term, cause moving kind of sucks. I wouldn't really consider anything with less than 6 months of availability.

If this sounds like a good match, I'd love to come meet you! Let me know the best way to do that. Thanks so much!!

Some useful links:
My facebook: https://www.facebook.com/kyle.nicholsschmolze
My startup: https://www.groupmuse.com
A picture of me on our about page: https://www.groupmuse.com/about
My favorite online comic: http://www.pbfcomics.com/115/

One more thing: I usually only check email in the mornings, so don't be insulted if I take a day to get back to you!

Cheers!

Kyle

"""

timing_offset = 0

listingLoaded = (w) ->
  setTimeout (->
    console.log 'click'
    $(w.document).contents().find('.reply_button.js-only').click()
  ), 30000
  timing_offset += 2000
  setTimeout (->
    console.log 'find email'
    findEmail w
  ), 60000 + timing_offset

findEmail = (w) ->
  email = undefined
  url = undefined
  email = $(w.document).contents().find('.anonemail').click()
  if email.length
    console.log 'Found email: ', email.text()
    url = w.location.href
    w.location.href = 'mailto:' + encodeURIComponent(email.text()) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body) + '%0A%0A' + encodeURIComponent(url)
    setTimeout (->
      w.close()
    ), 5000
  else
    setTimeout (->
      findEmail w
    ), 500

windows = []
links = $('.hdrlnk')
i = 0
while i < links.length
  windows.push window.open(links[i].href)
  w = windows[i]
  $(w.document).ready ->
    console.log 'loaded!'
    listingLoaded w
  i++
