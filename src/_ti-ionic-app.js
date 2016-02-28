angular.module (
  'ti-ionic-app',
  [
    'ionic',
    'ti-auth',
    'ti-ionic-app.dashboard',
    'ti-ionic-app.home',
    'ti-ionic-app-templates'
  ]
)


.run (
  function ($tiAuth) {

    $tiAuth.setStates ({
      home : "app.home.index",
      signin : "app.dashboard.signin"
    });

    $tiAuth.addService (
      'ti-cms',
      { 'api' : "http://sealedairdigital.com/divexpress/api/web/v0_10" }
    );

    $tiAuth.addService (
      'google',
      {
        clientId : "1051012468372-9a3sj0c4p41bnkcvmftgoqaa57f290vf.apps.googleusercontent.com"
      }
    );

    $tiAuth.addService (
      'linkedin',
      {
        clientId : "77a0cl3zsyie76",
        clientSecret : "Dzpj0CzJnTum3ttY"
      }
    );

    $tiAuth.addService (
      'twitter',
      {
        consumerKey : "OWygkoR9hqD02g1WKF4QBrqOM",
        consumerSecretKey : "VOR85Y4ZXcy5DcfAsC7CGmRlHCoGdTscnbD6z5ewV8oduJJq0L"
      }
    );
  }
);

console.log("TESTING");
