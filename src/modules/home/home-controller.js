class HomeController {
  constructor ($tiToast) {
    this.$tiToast = $tiToast
  }

  signout () {
    // $tiAuth.signout ();
  }

  toast () {
    this.$tiToast.say ('FUCK YOU ANGULAR I WIN')
  }
}

module.exports = [ '$tiToast', HomeController ]
