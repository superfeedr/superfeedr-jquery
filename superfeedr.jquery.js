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

        if(!opts.count)
          opts.count = 5;

        var qs = jQuery.param({
          'hub.mode': 'retrieve',
          'hub.topic': feed,
          'format': 'json',
          'count': opts.count
        });

        var url = '//' + $.superfeedr.options.login + ':' + $.superfeedr.options.key + "@" + host + '/'

        url = [url, qs].join('?');

        var req = $.ajax({
          url: url,
          dataType: "jsonp",
          jsonp: "callback",
         });

        req.done(function(data, textStatus, r) {
          if(data.error) {
            return cb(data);
          }
          return cb({feed: data});
        });
        return req;
      }
    }
  };

}(jQuery));
