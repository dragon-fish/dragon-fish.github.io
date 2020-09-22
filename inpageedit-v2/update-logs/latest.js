window.InPageEdit = window.InPageEdit || {};
InPageEdit.getLatestVersion = function (req) {
  var ver = {
    stable: '2.13.4-6',
    dev: '14.0.0-insider'
  }
  switch (req) {
    case 'develop':
    case 'dev':
    case 'd':
      return ver.dev;
    case 'stable':
    case 's':
    default:
      return ver.stable;
  }
}