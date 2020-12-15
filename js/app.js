'use strict';

(function() {
    function init() {
        var router = new Router([
            new Route('users', '1_users.html'),
            new Route('regions', '2_regions.html'),
            new Route('countries', '3_countries.html'),
            new Route('contacts', '4_contacts.html'),
            new Route('companies', '5_companies.html'),
            new Route('cities', '6_cities.html')
        ]);
    }
    init();
}());