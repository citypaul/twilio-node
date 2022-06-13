'use strict'

import { BaseTwilio, ClientOpts } from "../base/BaseTwilio";

/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 *
 * @constructor Twilio
 * @property (Twilio.Accounts) accounts - accounts domain
 * @property (Twilio.Api) api - api domain
 * @property (Twilio.Autopilot) autopilot - autopilot domain
 * @property (Twilio.Bulkexports) bulkexports - bulkexports domain
 * @property (Twilio.Chat) chat - chat domain
 * @property (Twilio.Conversations) conversations - conversations domain
 * @property (Twilio.Events) events - events domain
 * @property (Twilio.Flex) flex - flex domain
 * @property (Twilio.Frontline) frontline - frontline domain
 * @property (Twilio.Insights) insights - insights domain
 * @property (Twilio.IpMessaging) ipmessaging - ipmessaging domain
 * @property (Twilio.Lookups) lookups - lookups domain
 * @property (Twilio.Media) media - media domain
 * @property (Twilio.Messaging) messaging - messaging domain
 * @property (Twilio.Monitor) monitor - monitor domain
 * @property (Twilio.Notify) notify - notify domain
 * @property (Twilio.Numbers) numbers - numbers domain
 * @property (Twilio.Pricing) pricing - pricing domain
 * @property (Twilio.Proxy) proxy - proxy domain
 * @property (Twilio.Serverless) serverless - serverless domain
 * @property (Twilio.Studio) studio - studio domain
 * @property (Twilio.Supersim) supersim - supersim domain
 * @property (Twilio.Sync) sync - sync domain
 * @property (Twilio.Taskrouter) taskrouter - taskrouter domain
 * @property (Twilio.Trunking) trunking - trunking domain
 * @property (Twilio.Trusthub) trusthub - trusthub domain
 * @property (Twilio.Verify) verify - verify domain
 * @property (Twilio.Video) video - video domain
 * @property (Twilio.Voice) voice - voice domain
 * @property (Twilio.Wireless) wireless - wireless domain
 * @property (Twilio.Api.V2010.AccountContext.AddressesList) addresses - addresses resource
 * @property (Twilio.Api.V2010.AccountContext.ApplicationsList) applications - applications resource
 * @property (Twilio.Api.V2010.AccountContext.AuthorizedConnectAppsList) authorizedConnectApps - authorizedConnectApps resource
 * @property (Twilio.Api.V2010.AccountContext.AvailablePhoneNumbersList) availablePhoneNumbers - availablePhoneNumbers resource
 * @property (Twilio.Api.V2010.AccountContext.BalanceList) balance - balance resource
 * @property (Twilio.Api.V2010.AccountContext.CallsList) calls - calls resource
 * @property (Twilio.Api.V2010.AccountContext.ConferencesList) conferences - conferences resource
 * @property (Twilio.Api.V2010.AccountContext.ConnectAppsList) connectApps - connectApps resource
 * @property (Twilio.Api.V2010.AccountContext.IncomingPhoneNumbersList) incomingPhoneNumbers - incomingPhoneNumbers resource
 * @property (Twilio.Api.V2010.AccountContext.KeysList) keys - keys resource
 * @property (Twilio.Api.V2010.AccountContext.MessagesList) messages - messages resource
 * @property (Twilio.Api.V2010.AccountContext.NotificationsList) notifications - notifications resource
 * @property (Twilio.Api.V2010.AccountContext.OutgoingCallerIdsList) outgoingCallerIds - outgoingCallerIds resource
 * @property (Twilio.Api.V2010.AccountContext.QueuesList) queues - queues resource
 * @property (Twilio.Api.V2010.AccountContext.RecordingsList) recordings - recordings resource
 * @property (Twilio.Api.V2010.AccountContext.SIPList) sip - sip resource
 * @property (Twilio.Api.V2010.AccountContext.ShortCodesList) shortCodes - shortCodes resource
 * @property (Twilio.Api.V2010.AccountContext.SigningKeysList) signingKeys - signingKeys resource
 * @property (Twilio.Api.V2010.AccountContext.TokensList) tokens - tokens resource
 * @property (Twilio.Api.V2010.AccountContext.TranscriptionsList) transcriptions - transcriptions resource
 * @property (Twilio.Api.V2010.AccountContext.UsageList) usage - usage resource
 *
 * @param {string} username -
 *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
 * @param {string} password -
 *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
 * @param {ClientOpts} [opts] - The options argument
 *
 * @returns {Twilio} A new instance of Twilio client
 */
/* jshint ignore:end */


class Twilio extends BaseTwilio {
  _accounts: any
  _api: any
  _autopilot: any
  _bulkexports: any
  _chat: any
  _conversations: any
  _events: any
  _flex: any
  _frontline: any
  _insights: any
  _ipmessaging: any
  _lookups: any
  _media: any
  _messaging: any
  _monitor: any
  _notify: any
  _numbers: any
  _pricing: any
  _proxy: any
  _serverless: any
  _studio: any
  _supersim: any
  _sync: any
  _taskrouter: any
  _trunking: any
  _trusthub: any
  _verify: any
  _video: any
  _voice: any
  _wireless: any

  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);

    if (this.opts?.lazyLoading === false) {
        this.accounts;
        this.api;
        this.autopilot;
        this.bulkexports;
        this.chat;
        this.conversations;
        this.events;
        this.flex;
        this.frontline;
        this.insights;
        this.ipmessaging;
        this.lookups;
        this.media;
        this.messaging;
        this.monitor;
        this.notify;
        this.numbers;
        this.pricing;
        this.proxy;
        this.serverless;
        this.studio;
        this.supersim;
        this.sync;
        this.taskrouter;
        this.trunking;
        this.trusthub;
        this.verify;
        this.video;
        this.voice;
        this.wireless;
    }

  }

  //Domains
  get accounts() {
    if (!this._accounts) {
      const Accounts = require('./Accounts');  /* jshint ignore:line */
      this._accounts = new Accounts(this);
    }
    return this._accounts;
  }
  get api() {
    if (!this._api) {
      const Api = require('./Api');  /* jshint ignore:line */
      this._api = new Api(this);
    }
    return this._api;
  }
  get autopilot() {
    if (!this._autopilot) {
      const Autopilot = require('./Autopilot');  /* jshint ignore:line */
      this._autopilot = new Autopilot(this);
    }
    return this._autopilot;
  }
  get bulkexports() {
    if (!this._bulkexports) {
      const Bulkexports = require('./Bulkexports');  /* jshint ignore:line */
      this._bulkexports = new Bulkexports(this);
    }
    return this._bulkexports;
  }
  get chat() {
    if (!this._chat) {
      const Chat = require('./Chat');  /* jshint ignore:line */
      this._chat = new Chat(this);
    }
    return this._chat;
  }
  get conversations() {
    if (!this._conversations) {
      const Conversations = require('./Conversations');  /* jshint ignore:line */
      this._conversations = new Conversations(this);
    }
    return this._conversations;
  }
  get events() {
    if (!this._events) {
      const Events = require('./Events');  /* jshint ignore:line */
      this._events = new Events(this);
    }
    return this._events;
  }
  get flex() {
    if (!this._flex) {
      const Flex = require('./Flex');  /* jshint ignore:line */
      this._flex = new Flex(this);
    }
    return this._flex;
  }
  get frontline() {
    if (!this._frontline) {
      const Frontline = require('./Frontline');  /* jshint ignore:line */
      this._frontline = new Frontline(this);
    }
    return this._frontline;
  }
  get insights() {
    if (!this._insights) {
      const Insights = require('./Insights');  /* jshint ignore:line */
      this._insights = new Insights(this);
    }
    return this._insights;
  }
  get ipmessaging() {
    if (!this._ipmessaging) {
      const IpMessaging = require('./IpMessaging');  /* jshint ignore:line */
      this._ipmessaging = new IpMessaging(this);
    }
    return this._ipmessaging;
  }
  get lookups() {
    if (!this._lookups) {
      const Lookups = require('./Lookups');  /* jshint ignore:line */
      this._lookups = new Lookups(this);
    }
    return this._lookups;
  }
  get media() {
    if (!this._media) {
      const Media = require('./Media');  /* jshint ignore:line */
      this._media = new Media(this);
    }
    return this._media;
  }
  get messaging() {
    if (!this._messaging) {
      const Messaging = require('./Messaging');  /* jshint ignore:line */
      this._messaging = new Messaging(this);
    }
    return this._messaging;
  }
  get monitor() {
    if (!this._monitor) {
      const Monitor = require('./Monitor');  /* jshint ignore:line */
      this._monitor = new Monitor(this);
    }
    return this._monitor;
  }
  get notify() {
    if (!this._notify) {
      const Notify = require('./Notify');  /* jshint ignore:line */
      this._notify = new Notify(this);
    }
    return this._notify;
  }
  get numbers() {
    if (!this._numbers) {
      const Numbers = require('./Numbers');  /* jshint ignore:line */
      this._numbers = new Numbers(this);
    }
    return this._numbers;
  }
  get pricing() {
    if (!this._pricing) {
      const Pricing = require('./Pricing');  /* jshint ignore:line */
      this._pricing = new Pricing(this);
    }
    return this._pricing;
  }
  get proxy() {
    if (!this._proxy) {
      const Proxy = require('./Proxy');  /* jshint ignore:line */
      this._proxy = new Proxy(this);
    }
    return this._proxy;
  }
  get serverless() {
    if (!this._serverless) {
      const Serverless = require('./Serverless');  /* jshint ignore:line */
      this._serverless = new Serverless(this);
    }
    return this._serverless;
  }
  get studio() {
    if (!this._studio) {
      const Studio = require('./Studio');  /* jshint ignore:line */
      this._studio = new Studio(this);
    }
    return this._studio;
  }
  get supersim() {
    if (!this._supersim) {
      const Supersim = require('./Supersim');  /* jshint ignore:line */
      this._supersim = new Supersim(this);
    }
    return this._supersim;
  }
  get sync() {
    if (!this._sync) {
      const Sync = require('./Sync');  /* jshint ignore:line */
      this._sync = new Sync(this);
    }
    return this._sync;
  }
  get taskrouter() {
    if (!this._taskrouter) {
      const Taskrouter = require('./Taskrouter');  /* jshint ignore:line */
      this._taskrouter = new Taskrouter(this);
    }
    return this._taskrouter;
  }
  get trunking() {
    if (!this._trunking) {
      const Trunking = require('./Trunking');  /* jshint ignore:line */
      this._trunking = new Trunking(this);
    }
    return this._trunking;
  }
  get trusthub() {
    if (!this._trusthub) {
      const Trusthub = require('./Trusthub');  /* jshint ignore:line */
      this._trusthub = new Trusthub(this);
    }
    return this._trusthub;
  }
  get verify() {
    if (!this._verify) {
      const Verify = require('./Verify');  /* jshint ignore:line */
      this._verify = new Verify(this);
    }
    return this._verify;
  }
  get video() {
    if (!this._video) {
      const Video = require('./Video');  /* jshint ignore:line */
      this._video = new Video(this);
    }
    return this._video;
  }
  get voice() {
    if (!this._voice) {
      const Voice = require('./Voice');  /* jshint ignore:line */
      this._voice = new Voice(this);
    }
    return this._voice;
  }
  get wireless() {
    if (!this._wireless) {
      const Wireless = require('./Wireless');  /* jshint ignore:line */
      this._wireless = new Wireless(this);
    }
    return this._wireless;
  }

  get addresses() {
    return this.api.account.addresses;
  }
  get applications() {
    return this.api.account.applications;
  }
  get authorizedConnectApps() {
    return this.api.account.authorizedConnectApps;
  }
  get availablePhoneNumbers() {
    return this.api.account.availablePhoneNumbers;
  }
  get balance() {
    return this.api.account.balance;
  }
  get calls() {
    return this.api.account.calls;
  }
  get conferences() {
    return this.api.account.conferences;
  }
  get connectApps() {
    return this.api.account.connectApps;
  }
  get incomingPhoneNumbers() {
    return this.api.account.incomingPhoneNumbers;
  }
  get keys() {
    return this.api.account.keys;
  }
  get messages() {
    return this.api.account.messages;
  }
  get notifications() {
    return this.api.account.notifications;
  }
  get outgoingCallerIds() {
    return this.api.account.outgoingCallerIds;
  }
  get queues() {
    return this.api.account.queues;
  }
  get recordings() {
    return this.api.account.recordings;
  }
  get sip() {
    return this.api.account.sip;
  }
  get shortCodes() {
    return this.api.account.shortCodes;
  }
  get signingKeys() {
    return this.api.account.signingKeys;
  }
  get tokens() {
    return this.api.account.tokens;
  }
  get transcriptions() {
    return this.api.account.transcriptions;
  }
  get usage() {
    return this.api.account.usage;
  }
}

module.exports = Twilio;