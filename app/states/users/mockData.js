(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('mockData', service);

    service.$inject = [];

    function service() {
        return {
            // example user data
            users: users()
        };
    }

    function users() {
            return [
                {
                  'id': 1,
                  'gender': 'Male',
                  'first_name': 'Russell',
                  'last_name': 'Gonzalez',
                  'email': 'rgonzalez0@naver.com',
                  'date': '1968-07-19'
                }, {
                  'id': 2,
                  'gender': 'Female',
                  'first_name': 'Joan',
                  'last_name': 'Sullivan',
                  'email': 'jsullivan1@flavors.me',
                  'date': '1953-08-16'
                }, {
                  'id': 3,
                  'gender': 'Female',
                  'first_name': 'Nicole',
                  'last_name': 'Richardson',
                  'email': 'nrichardson2@google.cn',
                  'date': '1982-10-11'
                }, {
                  'id': 4,
                  'gender': 'Female',
                  'first_name': 'Lori',
                  'last_name': 'Price',
                  'email': 'lprice3@nih.gov',
                  'date': '1971-05-16'
                }, {
                  'id': 5,
                  'gender': 'Male',
                  'first_name': 'Jason',
                  'last_name': 'Henry',
                  'email': 'jhenry4@tinypic.com',
                  'date': '1970-10-03'
                }, {
                  'id': 6,
                  'gender': 'Female',
                  'first_name': 'Andrea',
                  'last_name': 'Richards',
                  'email': 'arichards5@spiegel.de',
                  'date': '1962-08-10'
                }, {
                  'id': 7,
                  'gender': 'Female',
                  'first_name': 'Cynthia',
                  'last_name': 'Cunningham',
                  'email': 'ccunningham6@php.net',
                  'date': '1977-05-27'
                }, {
                  'id': 8,
                  'gender': 'Male',
                  'first_name': 'Brandon',
                  'last_name': 'Russell',
                  'email': 'brussell7@cafepress.com',
                  'date': '1954-07-09'
                }, {
                  'id': 9,
                  'gender': 'Female',
                  'first_name': 'Judy',
                  'last_name': 'Thompson',
                  'email': 'jthompson8@chicagotribune.com',
                  'date': '1993-09-18'
                }, {
                  'id': 10,
                  'gender': 'Female',
                  'first_name': 'Anne',
                  'last_name': 'Pierce',
                  'email': 'apierce9@amazon.co.jp',
                  'date': '1988-01-06'
                }, {
                  'id': 11,
                  'gender': 'Male',
                  'first_name': 'Anthony',
                  'last_name': 'Hawkins',
                  'email': 'ahawkinsa@nsw.gov.au',
                  'date': '1972-09-05'
                }, {
                  'id': 12,
                  'gender': 'Male',
                  'first_name': 'Adam',
                  'last_name': 'Chapman',
                  'email': 'achapmanb@macromedia.com',
                  'date': '1989-09-28'
                }, {
                  'id': 13,
                  'gender': 'Female',
                  'first_name': 'Brenda',
                  'last_name': 'Gilbert',
                  'email': 'bgilbertc@discovery.com',
                  'date': '1965-10-21'
                }, {
                  'id': 14,
                  'gender': 'Male',
                  'first_name': 'Shawn',
                  'last_name': 'Green',
                  'email': 'sgreend@usda.gov',
                  'date': '1955-01-09'
                }, {
                  'id': 15,
                  'gender': 'Female',
                  'first_name': 'Pamela',
                  'last_name': 'Myers',
                  'email': 'pmyerse@bizjournals.com',
                  'date': '1965-12-26'
                }, {
                  'id': 16,
                  'gender': 'Male',
                  'first_name': 'Eric',
                  'last_name': 'Hamilton',
                  'email': 'ehamiltonf@1688.com',
                  'date': '1951-07-09'
                }, {
                  'id': 17,
                  'gender': 'Female',
                  'first_name': 'Elizabeth',
                  'last_name': 'Larson',
                  'email': 'elarsong@ebay.com',
                  'date': '2015-11-20'
                }, {
                  'id': 18,
                  'gender': 'Male',
                  'first_name': 'Earl',
                  'last_name': 'Lawson',
                  'email': 'elawsonh@xing.com',
                  'date': '2013-08-02'
                }, {
                  'id': 19,
                  'gender': 'Male',
                  'first_name': 'Ronald',
                  'last_name': 'Larson',
                  'email': 'rlarsoni@myspace.com',
                  'date': '1985-04-27'
                }, {
                  'id': 20,
                  'gender': 'Male',
                  'first_name': 'Steven',
                  'last_name': 'Alvarez',
                  'email': 'salvarezj@umich.edu',
                  'date': '1955-07-30'
                }, {
                  'id': 21,
                  'gender': 'Female',
                  'first_name': 'Angela',
                  'last_name': 'Allen',
                  'email': 'aallenk@weibo.com',
                  'date': '1953-08-01'
                }, {
                  'id': 22,
                  'gender': 'Female',
                  'first_name': 'Virginia',
                  'last_name': 'Rivera',
                  'email': 'vriveral@aboutads.info',
                  'date': '1968-01-04'
                }, {
                  'id': 23,
                  'gender': 'Female',
                  'first_name': 'Ruby',
                  'last_name': 'Simpson',
                  'email': 'rsimpsonm@t.co',
                  'date': '1967-06-11'
                }, {
                  'id': 24,
                  'gender': 'Male',
                  'first_name': 'Stephen',
                  'last_name': 'Vasquez',
                  'email': 'svasquezn@opera.com',
                  'date': '1976-05-28'
                }, {
                  'id': 25,
                  'gender': 'Male',
                  'first_name': 'Andrew',
                  'last_name': 'Cole',
                  'email': 'acoleo@boston.com',
                  'date': '1998-03-23'
                }, {
                  'id': 26,
                  'gender': 'Female',
                  'first_name': 'Jacqueline',
                  'last_name': 'Brown',
                  'email': 'jbrownp@vinaora.com',
                  'date': '1966-12-17'
                }, {
                  'id': 27,
                  'gender': 'Female',
                  'first_name': 'Brenda',
                  'last_name': 'Gibson',
                  'email': 'bgibsonq@woothemes.com',
                  'date': '1953-06-01'
                }, {
                  'id': 28,
                  'gender': 'Female',
                  'first_name': 'Patricia',
                  'last_name': 'Morales',
                  'email': 'pmoralesr@xing.com',
                  'date': '1970-03-20'
                }, {
                  'id': 29,
                  'gender': 'Male',
                  'first_name': 'Raymond',
                  'last_name': 'Simmons',
                  'email': 'rsimmonss@yellowpages.com',
                  'date': '1999-06-03'
                }, {
                  'id': 30,
                  'gender': 'Male',
                  'first_name': 'Russell',
                  'last_name': 'Hanson',
                  'email': 'rhansont@hhs.gov',
                  'date': '1960-11-22'
                }, {
                  'id': 31,
                  'gender': 'Male',
                  'first_name': 'Eugene',
                  'last_name': 'Day',
                  'email': 'edayu@nba.com',
                  'date': '1994-04-15'
                }, {
                  'id': 32,
                  'gender': 'Female',
                  'first_name': 'Lois',
                  'last_name': 'Austin',
                  'email': 'laustinv@sun.com',
                  'date': '1964-04-19'
                }, {
                  'id': 33,
                  'gender': 'Male',
                  'first_name': 'Brian',
                  'last_name': 'Carter',
                  'email': 'bcarterw@nsw.gov.au',
                  'date': '2000-05-22'
                }, {
                  'id': 34,
                  'gender': 'Female',
                  'first_name': 'Emily',
                  'last_name': 'Clark',
                  'email': 'eclarkx@g.co',
                  'date': '1995-12-26'
                }, {
                  'id': 35,
                  'gender': 'Male',
                  'first_name': 'Christopher',
                  'last_name': 'Wilson',
                  'email': 'cwilsony@topsy.com',
                  'date': '1963-07-11'
                }, {
                  'id': 36,
                  'gender': 'Female',
                  'first_name': 'Amanda',
                  'last_name': 'Montgomery',
                  'email': 'amontgomeryz@seattletimes.com',
                  'date': '1967-02-28'
                }, {
                  'id': 37,
                  'gender': 'Male',
                  'first_name': 'Philip',
                  'last_name': 'Frazier',
                  'email': 'pfrazier10@paginegialle.it',
                  'date': '1982-05-26'
                }, {
                  'id': 38,
                  'gender': 'Female',
                  'first_name': 'Kathleen',
                  'last_name': 'Rice',
                  'email': 'krice11@scientificamerican.com',
                  'date': '1983-05-08'
                }, {
                  'id': 39,
                  'gender': 'Female',
                  'first_name': 'Julie',
                  'last_name': 'Mitchell',
                  'email': 'jmitchell12@jimdo.com',
                  'date': '1977-01-12'
                }, {
                  'id': 40,
                  'gender': 'Female',
                  'first_name': 'Denise',
                  'last_name': 'Wells',
                  'email': 'dwells13@wsj.com',
                  'date': '1997-08-02'
                }, {
                  'id': 41,
                  'gender': 'Male',
                  'first_name': 'Ralph',
                  'last_name': 'Arnold',
                  'email': 'rarnold14@e-recht24.de',
                  'date': '1992-03-21'
                }, {
                  'id': 42,
                  'gender': 'Female',
                  'first_name': 'Carolyn',
                  'last_name': 'Hansen',
                  'email': 'chansen15@webmd.com',
                  'date': '1953-04-17'
                }, {
                  'id': 43,
                  'gender': 'Male',
                  'first_name': 'Samuel',
                  'last_name': 'Fuller',
                  'email': 'sfuller16@nature.com',
                  'date': '1978-05-04'
                }, {
                  'id': 44,
                  'gender': 'Female',
                  'first_name': 'Nancy',
                  'last_name': 'Snyder',
                  'email': 'nsnyder17@un.org',
                  'date': '2006-01-18'
                }, {
                  'id': 45,
                  'gender': 'Male',
                  'first_name': 'Lawrence',
                  'last_name': 'Cox',
                  'email': 'lcox18@umich.edu',
                  'date': '1990-11-06'
                }, {
                  'id': 46,
                  'gender': 'Male',
                  'first_name': 'Steven',
                  'last_name': 'Carpenter',
                  'email': 'scarpenter19@booking.com',
                  'date': '2015-10-10'
                }, {
                  'id': 47,
                  'gender': 'Female',
                  'first_name': 'Cynthia',
                  'last_name': 'Johnston',
                  'email': 'cjohnston1a@jugem.jp',
                  'date': '1997-10-08'
                }, {
                  'id': 48,
                  'gender': 'Male',
                  'first_name': 'Jerry',
                  'last_name': 'Lawrence',
                  'email': 'jlawrence1b@smh.com.au',
                  'date': '1966-05-04'
                }, {
                  'id': 49,
                  'gender': 'Female',
                  'first_name': 'Marie',
                  'last_name': 'Green',
                  'email': 'mgreen1c@boston.com',
                  'date': '1968-11-03'
                }, {
                  'id': 50,
                  'gender': 'Female',
                  'first_name': 'Katherine',
                  'last_name': 'Campbell',
                  'email': 'kcampbell1d@sohu.com',
                  'date': '1999-06-30'
                }, {
                  'id': 51,
                  'gender': 'Male',
                  'first_name': 'Thomas',
                  'last_name': 'Lewis',
                  'email': 'tlewis1e@woothemes.com',
                  'date': '1971-04-02'
                }, {
                  'id': 52,
                  'gender': 'Male',
                  'first_name': 'Jeremy',
                  'last_name': 'Cole',
                  'email': 'jcole1f@tinypic.com',
                  'date': '2015-06-10'
                }, {
                  'id': 53,
                  'gender': 'Female',
                  'first_name': 'Laura',
                  'last_name': 'Carpenter',
                  'email': 'lcarpenter1g@ezinearticles.com',
                  'date': '1958-02-24'
                }, {
                  'id': 54,
                  'gender': 'Female',
                  'first_name': 'Carolyn',
                  'last_name': 'Moreno',
                  'email': 'cmoreno1h@miibeian.gov.cn',
                  'date': '2007-11-20'
                }, {
                  'id': 55,
                  'gender': 'Female',
                  'first_name': 'Phyllis',
                  'last_name': 'Meyer',
                  'email': 'pmeyer1i@shareasale.com',
                  'date': '2009-12-22'
                }, {
                  'id': 56,
                  'gender': 'Female',
                  'first_name': 'Helen',
                  'last_name': 'Mills',
                  'email': 'hmills1j@over-blog.com',
                  'date': '1954-05-12'
                }, {
                  'id': 57,
                  'gender': 'Female',
                  'first_name': 'Nicole',
                  'last_name': 'Ferguson',
                  'email': 'nferguson1k@meetup.com',
                  'date': '2008-06-20'
                }, {
                  'id': 58,
                  'gender': 'Female',
                  'first_name': 'Wanda',
                  'last_name': 'George',
                  'email': 'wgeorge1l@gnu.org',
                  'date': '1995-05-27'
                }, {
                  'id': 59,
                  'gender': 'Female',
                  'first_name': 'Barbara',
                  'last_name': 'Simmons',
                  'email': 'bsimmons1m@businessinsider.com',
                  'date': '1962-09-13'
                }, {
                  'id': 60,
                  'gender': 'Female',
                  'first_name': 'Julie',
                  'last_name': 'Rogers',
                  'email': 'jrogers1n@foxnews.com',
                  'date': '1981-10-31'
                }, {
                  'id': 61,
                  'gender': 'Male',
                  'first_name': 'Scott',
                  'last_name': 'Jacobs',
                  'email': 'sjacobs1o@aboutads.info',
                  'date': '1971-07-12'
                }, {
                  'id': 62,
                  'gender': 'Male',
                  'first_name': 'Aaron',
                  'last_name': 'Howard',
                  'email': 'ahoward1p@plala.or.jp',
                  'date': '2015-04-16'
                }, {
                  'id': 63,
                  'gender': 'Male',
                  'first_name': 'Jonathan',
                  'last_name': 'Simmons',
                  'email': 'jsimmons1q@google.it',
                  'date': '1974-02-19'
                }, {
                  'id': 64,
                  'gender': 'Female',
                  'first_name': 'Teresa',
                  'last_name': 'Stevens',
                  'email': 'tstevens1r@earthlink.net',
                  'date': '1951-04-13'
                }, {
                  'id': 65,
                  'gender': 'Male',
                  'first_name': 'Joe',
                  'last_name': 'Gonzales',
                  'email': 'jgonzales1s@techcrunch.com',
                  'date': '1976-07-02'
                }, {
                  'id': 66,
                  'gender': 'Female',
                  'first_name': 'Lisa',
                  'last_name': 'Harvey',
                  'email': 'lharvey1t@craigslist.org',
                  'date': '1994-12-13'
                }, {
                  'id': 67,
                  'gender': 'Female',
                  'first_name': 'Nicole',
                  'last_name': 'West',
                  'email': 'nwest1u@mlb.com',
                  'date': '1993-11-10'
                }, {
                  'id': 68,
                  'gender': 'Male',
                  'first_name': 'Steven',
                  'last_name': 'Gutierrez',
                  'email': 'sgutierrez1v@clickbank.net',
                  'date': '1990-11-03'
                }, {
                  'id': 69,
                  'gender': 'Male',
                  'first_name': 'Roger',
                  'last_name': 'Parker',
                  'email': 'rparker1w@phoca.cz',
                  'date': '1957-01-02'
                }, {
                  'id': 70,
                  'gender': 'Female',
                  'first_name': 'Irene',
                  'last_name': 'Burton',
                  'email': 'iburton1x@macromedia.com',
                  'date': '1992-07-13'
                }, {
                  'id': 71,
                  'gender': 'Male',
                  'first_name': 'Juan',
                  'last_name': 'Simmons',
                  'email': 'jsimmons1y@gravatar.com',
                  'date': '1989-07-18'
                }, {
                  'id': 72,
                  'gender': 'Male',
                  'first_name': 'Charles',
                  'last_name': 'Ferguson',
                  'email': 'cferguson1z@wiley.com',
                  'date': '2013-01-26'
                }, {
                  'id': 73,
                  'gender': 'Male',
                  'first_name': 'Walter',
                  'last_name': 'Wells',
                  'email': 'wwells20@desdev.cn',
                  'date': '1996-03-23'
                }, {
                  'id': 74,
                  'gender': 'Female',
                  'first_name': 'Patricia',
                  'last_name': 'Myers',
                  'email': 'pmyers21@icq.com',
                  'date': '1957-10-04'
                }, {
                  'id': 75,
                  'gender': 'Female',
                  'first_name': 'Nicole',
                  'last_name': 'Anderson',
                  'email': 'nanderson22@hp.com',
                  'date': '1957-05-09'
                }, {
                  'id': 76,
                  'gender': 'Male',
                  'first_name': 'Gerald',
                  'last_name': 'Diaz',
                  'email': 'gdiaz23@issuu.com',
                  'date': '1952-07-31'
                }, {
                  'id': 77,
                  'gender': 'Male',
                  'first_name': 'Harry',
                  'last_name': 'Scott',
                  'email': 'hscott24@bandcamp.com',
                  'date': '1987-07-01'
                }, {
                  'id': 78,
                  'gender': 'Male',
                  'first_name': 'Sean',
                  'last_name': 'Torres',
                  'email': 'storres25@netlog.com',
                  'date': '2011-08-28'
                }, {
                  'id': 79,
                  'gender': 'Male',
                  'first_name': 'Jason',
                  'last_name': 'Welch',
                  'email': 'jwelch26@google.com.br',
                  'date': '1984-10-02'
                }, {
                  'id': 80,
                  'gender': 'Male',
                  'first_name': 'Charles',
                  'last_name': 'Dunn',
                  'email': 'cdunn27@miitbeian.gov.cn',
                  'date': '2010-03-23'
                }, {
                  'id': 81,
                  'gender': 'Female',
                  'first_name': 'Joyce',
                  'last_name': 'Lopez',
                  'email': 'jlopez28@ftc.gov',
                  'date': '1991-09-12'
                }, {
                  'id': 82,
                  'gender': 'Male',
                  'first_name': 'Albert',
                  'last_name': 'Washington',
                  'email': 'awashington29@twitpic.com',
                  'date': '1977-08-04'
                }, {
                  'id': 83,
                  'gender': 'Male',
                  'first_name': 'Jeffrey',
                  'last_name': 'Mccoy',
                  'email': 'jmccoy2a@economist.com',
                  'date': '1993-02-19'
                }, {
                  'id': 84,
                  'gender': 'Female',
                  'first_name': 'Jane',
                  'last_name': 'Mills',
                  'email': 'jmills2b@dedecms.com',
                  'date': '1963-04-29'
                }, {
                  'id': 85,
                  'gender': 'Female',
                  'first_name': 'Karen',
                  'last_name': 'Gardner',
                  'email': 'kgardner2c@mit.edu',
                  'date': '1978-06-23'
                }, {
                  'id': 86,
                  'gender': 'Female',
                  'first_name': 'Mildred',
                  'last_name': 'Murphy',
                  'email': 'mmurphy2d@scribd.com',
                  'date': '1963-12-30'
                }, {
                  'id': 87,
                  'gender': 'Male',
                  'first_name': 'Gary',
                  'last_name': 'Hall',
                  'email': 'ghall2e@smh.com.au',
                  'date': '1994-08-23'
                }, {
                  'id': 88,
                  'gender': 'Male',
                  'first_name': 'Adam',
                  'last_name': 'Wright',
                  'email': 'awright2f@youtu.be',
                  'date': '1976-09-28'
                }, {
                  'id': 89,
                  'gender': 'Male',
                  'first_name': 'Martin',
                  'last_name': 'Rodriguez',
                  'email': 'mrodriguez2g@bluehost.com',
                  'date': '1968-01-26'
                }, {
                  'id': 90,
                  'gender': 'Male',
                  'first_name': 'Terry',
                  'last_name': 'Warren',
                  'email': 'twarren2h@columbia.edu',
                  'date': '1987-03-26'
                }, {
                  'id': 91,
                  'gender': 'Male',
                  'first_name': 'Fred',
                  'last_name': 'Cooper',
                  'email': 'fcooper2i@globo.com',
                  'date': '1980-04-16'
                }, {
                  'id': 92,
                  'gender': 'Male',
                  'first_name': 'Matthew',
                  'last_name': 'Fox',
                  'email': 'mfox2j@deliciousdays.com',
                  'date': '1980-01-20'
                }, {
                  'id': 93,
                  'gender': 'Female',
                  'first_name': 'Heather',
                  'last_name': 'Walker',
                  'email': 'hwalker2k@artisteer.com',
                  'date': '2013-09-07'
                }, {
                  'id': 94,
                  'gender': 'Male',
                  'first_name': 'Russell',
                  'last_name': 'White',
                  'email': 'rwhite2l@scribd.com',
                  'date': '1996-08-08'
                }, {
                  'id': 95,
                  'gender': 'Female',
                  'first_name': 'Kathy',
                  'last_name': 'Freeman',
                  'email': 'kfreeman2m@loc.gov',
                  'date': '1959-09-11'
                }, {
                  'id': 96,
                  'gender': 'Female',
                  'first_name': 'Judith',
                  'last_name': 'Stanley',
                  'email': 'jstanley2n@technorati.com',
                  'date': '2005-09-19'
                }, {
                  'id': 97,
                  'gender': 'Female',
                  'first_name': 'Teresa',
                  'last_name': 'Hernandez',
                  'email': 'thernandez2o@studiopress.com',
                  'date': '2003-06-27'
                }, {
                  'id': 98,
                  'gender': 'Male',
                  'first_name': 'Jeffrey',
                  'last_name': 'Mitchell',
                  'email': 'jmitchell2p@fc2.com',
                  'date': '1987-12-25'
                }, {
                  'id': 99,
                  'gender': 'Male',
                  'first_name': 'Frank',
                  'last_name': 'Chapman',
                  'email': 'fchapman2q@myspace.com',
                  'date': '1968-12-14'
                }, {
                  'id': 100,
                  'gender': 'Male',
                  'first_name': 'Charles',
                  'last_name': 'Pierce',
                  'email': 'cpierce2r@w3.org',
                  'date': '2000-11-30'
                }
            ];
        }

}(angular));

