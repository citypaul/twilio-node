'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Bundle', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'friendlyName': 'friendly_name', 'email': 'email'};
      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles';

      var values = {'FriendlyName': 'friendly_name', 'Email': 'email', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'status': 'draft',
          'email': 'email',
          'status_callback': 'http://www.example.com',
          'valid_until': null,
          'date_created': '2019-07-30T22:29:24Z',
          'date_updated': '2019-07-31T01:09:00Z',
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
              'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
              'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {'friendlyName': 'friendly_name', 'email': 'email'};
      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .bundles.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .bundles.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .bundles.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'results': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'provisionally-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2020-07-31T01:00:00Z',
                  'date_created': '2019-07-30T22:29:24Z',
                  'date_updated': '2019-07-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=draft&RegulationSid=RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&IsoCountry=US&FriendlyName=friendly_name&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_approved_au_mobile_with_date response',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'twilio-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2022-11-29T01:00:00Z',
                  'date_created': '2021-08-30T22:29:24Z',
                  'date_updated': '2021-08-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=twilio-approved&IsoCountry=AU&HasValidUntilDate=true&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=twilio-approved&IsoCountry=AU&HasValidUntilDate=true&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_approved_au_mobile_date_less response',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'twilio-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2022-11-29T01:00:00Z',
                  'date_created': '2021-08-30T22:29:24Z',
                  'date_updated': '2021-08-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=twilio-approved&IsoCountry=AU&ValidUntilDate%3C=2022-11-29T23%3A59%3A59Z&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=twilio-approved&IsoCountry=AU&ValidUntilDate%3C=2022-11-29T23%3A59%3A59Z&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_approved_japan_tollfree_date_between response',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'status': 'twilio-approved',
                  'email': 'email',
                  'status_callback': 'http://www.example.com',
                  'valid_until': '2022-11-29T01:00:00Z',
                  'date_created': '2021-08-30T22:29:24Z',
                  'date_updated': '2021-08-31T01:09:00Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
                      'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
                      'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=twilio-approved&IsoCountry=JP&ValidUntilDate%3E=2022-01-01T00%3A00%3A00Z&ValidUntilDate%3C=2022-11-29T23%3A59%3A59Z&NumberType=tollfree&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles?Status=twilio-approved&IsoCountry=JP&ValidUntilDate%3E=2022-01-01T00%3A00%3A00Z&ValidUntilDate%3C=2022-11-29T23%3A59%3A59Z&NumberType=tollfree&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'status': 'draft',
          'valid_until': null,
          'email': 'email',
          'status_callback': 'http://www.example.com',
          'date_created': '2019-07-30T22:29:24Z',
          'date_updated': '2019-07-31T01:09:00Z',
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
              'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
              'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'regulation_sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'status': 'draft',
          'email': 'email',
          'status_callback': 'http://www.example.com',
          'valid_until': null,
          'date_created': '2019-07-30T22:29:24Z',
          'date_updated': '2019-07-31T01:09:00Z',
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'evaluations': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Evaluations',
              'item_assignments': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ItemAssignments',
              'bundle_copies': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Copies'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://numbers.twilio.com/v2/RegulatoryCompliance/Bundles/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .bundles('BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});