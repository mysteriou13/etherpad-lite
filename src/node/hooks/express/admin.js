var eejs = require('ep_etherpad-lite/node/eejs');

exports.expressCreateServer = function (hook_name, args, cb) {
  args.app.get('/admin', function(req, res) {
    if('/' != req.path[req.path.length-1]) return res.redirect('/admin/');
    res.send( eejs.require("ep_etherpad-lite/templates/admin/index.html", {}) );
  });



args.app.get('/admin/plugins', function(req, res) {
    var gitCommit = settings.getGitCommit();
    var epVersion = settings.getEpVersion();
    res.send( eejs.require("ep_etherpad-lite/templates/admin/plugins.html",
      {
        
      }) 
    );
  });

args.app.get('/admin/plugins/info', function(req, res) {
    var gitCommit = settings.getGitCommit();
    var epVersion = settings.getEpVersion();
    res.send( eejs.require("ep_etherpad-lite/templates/admin/plugins-info.html",
      {
        
      }) 
    );
  });

}

