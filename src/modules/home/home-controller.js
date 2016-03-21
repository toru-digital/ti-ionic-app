class HomeController {
  constructor ($tiToast) {
    this.$tiToast = $tiToast
  }

  signout () {
    // $tiAuth.signout ();
  }

  toast () {
    this.$tiToast.say ('HELLO')
  }
}

module.exports = [ '$tiToast', HomeController ]
