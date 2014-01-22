(function($) {

  $.superfeedr = {
    options: {
      login: '',
      key: '',
    },

    Feed: function(feed) {
      this.load = function loadFeed(opts, cb) {
        if(typeof(opts) == 'function')
          cb = opts;

        var host = 'push.superfeedr.com'; //
        var scheme = 'http';
        if(opts.https)
          scheme = 'https';

        if(!opts.count)
          opts.count = 5;

        var qs = jQuery.param({
          'hub.mode': 'retrieve',
          'hub.topic': feed,
          'format': 'json',
          'count': opts.count
        });

        var url = scheme + '://' + $.superfeedr.options.login + ':' + $.superfeedr.options.key + "@" + host + '/'

        url = [url, qs].join('?');

        var req = $.ajax({
          type: "GET",
          url: url,
          dataType: "jsonp",
          accepts: "application/json",
        });

        req.done(function(data) {
          cb({feed: data});
        })
        .fail(function(e) {
          console.log('FAIL', e)
        });
        return req;
      }
    }
  };

}(jQuery));
