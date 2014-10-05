/*==============================================================================*/
/* Casper generated Sat Jul 19 2014 18:44:28 GMT+0200 (Paris, Madrid (heure d’été)) */
/*==============================================================================*/

var casper = require("casper").create();
casper.start("http://www.voyages-sncf.com/", function() {

   casper.waitForSelector("form[name=TrainTypeForm] input[name='origin_city']",
       function success() {
           test.assertExists("form[name=TrainTypeForm] input[name='origin_city']");
           this.click("form[name=TrainTypeForm] input[name='origin_city']");
       },
       function fail() {
           test.assertExists("form[name=TrainTypeForm] input[name='origin_city']");
   });
   
  });
   casper.waitForSelector("input[name='origin_city']",
       function success() {
           this.sendKeys("input[name='origin_city']", "paris");
       },
       function fail() {
           test.assertExists("input[name='origin_city']");
   });
   casper.waitForSelector("form[name=VolTypeForm] input[name='origin_city']",
       function success() {
           test.assertExists("form[name=VolTypeForm] input[name='origin_city']");
           this.click("form[name=VolTypeForm] input[name='origin_city']");
       },
       function fail() {
           test.assertExists("form[name=VolTypeForm] input[name='origin_city']");
   });
   casper.waitForSelector("form[name=VolTypeForm] input[name='origin_city']",
       function success() {
           test.assertExists("form[name=VolTypeForm] input[name='origin_city']");
           this.click("form[name=VolTypeForm] input[name='origin_city']");
       },
       function fail() {
           test.assertExists("form[name=VolTypeForm] input[name='origin_city']");
   });
   casper.waitForSelector("input[name='origin_city']",
       function success() {
           this.sendKeys("input[name='origin_city']", "paris");
       },
       function fail() {
           test.assertExists("input[name='origin_city']");
   });
   casper.waitForSelector("form[name=VolTypeForm] input[name='destination_city']",
       function success() {
           test.assertExists("form[name=VolTypeForm] input[name='destination_city']");
           this.click("form[name=VolTypeForm] input[name='destination_city']");
       },
       function fail() {
           test.assertExists("form[name=VolTypeForm] input[name='destination_city']");
   });
   casper.waitForSelector("input[name='destination_city']",
       function success() {
           this.sendKeys("input[name='destination_city']", "nantes");
       },
       function fail() {
           test.assertExists("input[name='destination_city']");
   });
   casper.waitForSelector("form[name=VolTypeForm] input[name='outward_date']",
       function success() {
           test.assertExists("form[name=VolTypeForm] input[name='outward_date']");
           this.click("form[name=VolTypeForm] input[name='outward_date']");
       },
       function fail() {
           test.assertExists("form[name=VolTypeForm] input[name='outward_date']");
   });
   casper.waitForSelector(".selectable_day.hover.selected",
       function success() {
           test.assertExists(".selectable_day.hover.selected");
           this.click(".selectable_day.hover.selected");
       },
       function fail() {
           test.assertExists(".selectable_day.hover.selected");
   });
   casper.waitForSelector("form[name=VolTypeForm] input[name='inward_date']",
       function success() {
           test.assertExists("form[name=VolTypeForm] input[name='inward_date']");
           this.click("form[name=VolTypeForm] input[name='inward_date']");
       },
       function fail() {
           test.assertExists("form[name=VolTypeForm] input[name='inward_date']");
   });
   casper.waitForSelector(".selectable_day.hover.selected",
       function success() {
           test.assertExists(".selectable_day.hover.selected");
           this.click(".selectable_day.hover.selected");
       },
       function fail() {
           test.assertExists(".selectable_day.hover.selected");
   });
   casper.waitForSelector("form[name=VolTypeForm] input[type=submit][value='Réservez']",
       function success() {
           test.assertExists("form[name=VolTypeForm] input[type=submit][value='Réservez']");
           this.click("form[name=VolTypeForm] input[type=submit][value='Réservez']");
       },
       function fail() {
           test.assertExists("form[name=VolTypeForm] input[type=submit][value='Réservez']");
   });
   /* submit form */
   casper.waitForSelector("div > img",
       function success() {
           test.assertExists("div > img");
           this.click("div > img");
       },
       function fail() {
           test.assertExists("div > img");
   });

   casper.run(function() {test.done();});
});