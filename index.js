// Generated by CoffeeScript 1.9.3
(function() {
  var body, findEmail, i, links, listingLoaded, subject, timing_offset, w, windows;

  subject = 'This guy Kyle wants to live in your place!';

  body = "Hello there!\n\nMy name is Kyle, I saw your post on Craigslist, and would love if you'd consider my application as a roommate! (Is this an application? It's just an email, but it definitely always feels like I'm applying to something). \n\nSome info about me: I'm an optimistic and pretty energetic guy, I play a lot of ultimate frisbee, I bike everywhere, and I love dogs and cats. I'm also a vegetarian, but not the kind who pays attention to what people around me are eating. But yea so I eat a lot of sweet potatoes and make burritos at least 5 times a week (especially now that I've mastered the breakfast burrito). I drink and love coffee, play a decent amount of chess (for fun only), and have wonderful relationships with Beethoven, David Foster Wallace, and Stanley Kubrick. I'm 26.\n\nWork stuff: I'm a co-founder of a startup called Groupmuse, which is a network of classical music house concert parties. I spend most of my days coding, helping connect local classical music groups with living-room-owners so that we can get as many of these concerts happening as possible, and then I end up going to a lot of said concerts because they're super fun. If we live together, you can expect regular invites to house concerts. No pressure to actually come, of course.\n\nA bit of what I'm looking for: friendly faces, mostly. I am quite successful at getting along with almost everyone I meet, as long as they are generally respectful. Bonus points if you like to talk about music, books, film, or startups! I would like to live somewhere medium-to-long term, cause moving kind of sucks. I wouldn't really consider anything with less than 6 months of availability.\n\nIf this sounds like a good match, I'd love to come meet you! Let me know the best way to do that. Thanks so much!!\n\nSome useful links:\nMy facebook: https://www.facebook.com/kyle.nicholsschmolze\nMy startup: https://www.groupmuse.com\nA picture of me on our about page: https://www.groupmuse.com/about\nMy favorite online comic: http://www.pbfcomics.com/115/\n\nOne more thing: I usually only check email in the mornings, so don't be insulted if I take a day to get back to you!\n\nCheers!\n\nKyle\n";

  timing_offset = 0;

  listingLoaded = function(w) {
    setTimeout((function() {
      console.log('click');
      return $(w.document).contents().find('.reply_button.js-only').click();
    }), 30000);
    timing_offset += 2000;
    return setTimeout((function() {
      console.log('find email');
      return findEmail(w);
    }), 60000 + timing_offset);
  };

  findEmail = function(w) {
    var email, url;
    email = void 0;
    url = void 0;
    email = $(w.document).contents().find('.anonemail').click();
    if (email.length) {
      console.log('Found email: ', email.text());
      url = w.location.href;
      w.location.href = 'mailto:' + encodeURIComponent(email.text()) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body) + '%0A%0A' + encodeURIComponent(url);
      return setTimeout((function() {
        return w.close();
      }), 5000);
    } else {
      return setTimeout((function() {
        return findEmail(w);
      }), 500);
    }
  };

  windows = [];

  links = $('.hdrlnk');

  i = 0;

  while (i < links.length) {
    windows.push(window.open(links[i].href));
    w = windows[i];
    $(w.document).ready(function() {
      console.log('loaded!');
      return listingLoaded(w);
    });
    i++;
  }

}).call(this);
