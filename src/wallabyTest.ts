import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';


let testing = require('@angular/core/testing');
let testingBrowser = require('@angular/platform-browser-dynamic/testing');

testing.getTestBed().initTestEnvironment(
    testingBrowser.BrowserDynamicTestingModule,
    testingBrowser.platformBrowserDynamicTesting());
