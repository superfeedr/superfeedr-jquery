superfeedr-jquery
=================

![Superfeedr](https://superfeedr.com/images/superfeedr_complete.png)

A Jquery plugin to access Superfeedr's retrieve API. It allows anyone to quickly and easily embed the content of any feed on their site.

It's loosely inspired by the [Google Feeds API](https://developers.google.com/feed/) and uses Jquery as a dependency.

## Getting started

1. Open a [subscriber account](https://superfeedr.com/subscriber).
2. Subscribe to the feeds you'll need to load, using either our XMPP console or or webhook API. 
3. [Create a token](https://superfeedr.com/tokens/new), make sure you pick the `retrieve` mode only so that people won't use your credentials

### API

#### Load

This will load the past content of a feed, using Superfeedr's [retrieve API](http://documentation.superfeedr.com/subscribers.html#retrieving-entries-with-pubsubhubbub).

#### Stream

This will load the past content of a feed and keep the socket open for more entries to come via [Server Sent Events](http://blog.superfeedr.com/server-sent-events/).


## Example

Check the `/examples` directory or the source code of [Superfeedr's home page](https://superfeedr.com/) for an example in the wild! Feel free to submit pull requests with links to your integration as well!
