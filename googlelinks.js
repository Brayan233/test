var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('section.tabsContent ul li a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://www.leboncoin.fr/telephonie/offres/ile_de_france/?th=1&parrot=0');



casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
});



casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});
