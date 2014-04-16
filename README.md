superfeedr-jquery
=================

![Superfeedr](https://superfeedr.com/images/superfeedr_complete.png)

A Jquery plugin to access Superfeedr's retrieve API. It allows anyone to quickly and easily embed the content of any feed on their site.

It's loosely inspired by the [Google Feeds API](https://developers.google.com/feed/) and uses Jquery as a dependency.

## Getting started

1. Open a [subscriber account](https://superfeedr.com/subscriber).
2. Subscribe to the feeds you'll need to load, using either our XMPP console or or webhook API. 
3. [Create a token](https://superfeedr.com/tokens/new), make sure you pick the `retrieve` mode only so that people won't use your credentials

## Example

```
<html>
  <head>
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="../superfeedr.jquery.js"></script>

    <script type="text/javascript">

    $.superfeedr.options.login = 'demo'; // Superfeedr login
    $.superfeedr.options.key = '10fd58858a279c4eb25bd57ea6d3eda2'; // Token value created at step 3.

    var feed = new $.superfeedr.Feed('http://blog.superfeedr.com/atom.xml'); // Replace with the feed url you want to retrieve.

    // The count option helps you determine how many stories you want to load. By default: 5.
    feed.load({count: 10}, function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.items.length; i++) {
            var entry = result.feed.items[i];
            var div = document.createElement("div");
            div.appendChild(document.createTextNode(entry.title));
            container.appendChild(div);
          }
        }
    });
    </script>
  </head>
  <body>
    <div id="feed"></div>
  </body>
</html>
```

