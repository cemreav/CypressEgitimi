const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:"4fnpg9",
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl:"https://demo.vercel.store/",
    watchForFileChanges:false,
    viewportWidth:1920,
    viewportHeight:1080,
    //pageLoadTimeout:20000,
    defaultCommandTimeout:10000,
    video:true,
    failOnStatusCode:false,
    blockHosts:[
      'https://events.backtrace.io/api/unique-events/submit?universe=UNIVERSE&token=TOKEN'
    ]
  },
});
