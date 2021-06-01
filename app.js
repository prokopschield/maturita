const { create, rewrite } = require('nodesite.eu');
const config = require('nodesite-webftp/lib/config');
require('nodesite.eu/lib/dynamic')(config.domain);
create(config.domain, '/', (req) => (require('nodesite-webftp'), rewrite(req, '/')));
