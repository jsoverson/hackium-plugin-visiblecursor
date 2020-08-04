import { expect } from 'chai';
import { Hackium } from 'hackium';
import plugin from '../src';
import { start, TestServer } from '@jsoverson/test-server';

describe('visiblecursor', function () {
  this.timeout(20000);
  let instance: Hackium | undefined;
  let server: TestServer;

  before(async () => {
    server = await start(__dirname, '_server_root');
  });

  after(async () => {
    await server.stop();
  });

  afterEach(async () => {
    if (instance) {
      return instance.close();
    }
  });

  it('should not explode', async () => {
    // this is a visual plugin and I haven't thought hard about how to test it.
    instance = new Hackium({ plugins: [plugin] });
    const browser = await instance.cliBehavior();
    const [page] = await browser.pages();
    await page.goto(server.url('index.html'));
  });
});
