const React                    = require('react');
const Sefaria                  = require('./sefaria/sefaria');
const $                        = require('./sefaria/sefariaJquery');
const { NewsletterSignUpForm } = require('./Misc');
import Component from 'react-class';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {subscribeMessage: null};
  }
  trackLanguageClick(language){
    Sefaria.track.setInterfaceLanguage('interface language footer', language);
  }
  handleSubscribeKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleSubscribe();
    }
  }
  handleSubscribe() {
    var email = $("#newsletterInput").val();
    if (Sefaria.util.isValidEmailAddress(email)) {
      Sefaria.track.event("Footer", "Subscribe from Footer", "");
      this.setState({subscribeMessage: "Subscribing..."});
      var list = Sefaria.interfaceLang == "hebrew" ? "Announcements_General_Hebrew" : "Announcements_General"
      $.post("/api/subscribe/" + email + "?lists=" + list, function(data) {
        if ("error" in data) {
          this.setState({subscribeMessage: data.error});
        } else {
          this.setState({subscribeMessage: "Subscribed! Welcome to our list."});
        }
      }.bind(this)).error(function(data) {
        this.setState({subscribeMessage: "Sorry, there was an error."});
      }.bind(this));
    } else {
      this.setState({subscribeMessage: "Please enter a valid email address."});
    }
  }
  render() {
    if (!Sefaria._siteSettings.TORAH_SPECIFIC) { return null; }

    const fbURL = Sefaria.interfaceLang == "hebrew" ? "https://www.facebook.com/sefaria.org.il" : "https://www.facebook.com/sefaria.org";
    const blgURL = Sefaria.interfaceLang == "hebrew" ? "https://blog.sefaria.org.il/" : "https://blog.sefaria.org/";
    let currentPath = Sefaria.util.currentPath();
    let currentPathEncoded = encodeURIComponent(currentPath);
    let next = currentPathEncoded ? currentPathEncoded : '?home';
    return (
      <footer id="footer" className="static sans">
        <div id="footerInner">
          <div className="section">

              <div className="header">
                  <span className="int-en">About</span>
                  <span className="int-he">אודות</span>
              </div>
              <a href="/about" className="outOfAppLink">
                  <span className="int-en">What is Sefaria?</span>
                  <span className="int-he">מהי ספריא</span>
              </a>
              <a href="/help" className="outOfAppLink">
                  <span className="int-en">Help</span>
                  <span className="int-he">עזרה</span>
              </a>
              <a href="/faq" target="_blank" className="outOfAppLink">
                  <span className="int-en">FAQ</span>
                  <span className="int-he">שאלות נפוצות</span>
              </a>
              <a href="/team" className="outOfAppLink">
                  <span className="int-en">Team</span>
                  <span className="int-he">צוות</span>
              </a>
              <a href="/testimonials" className="outOfAppLink">
                  <span className="int-en">Testimonials</span>
                  <span className="int-he">חוות דעת</span>
              </a>
              <a href="/metrics" className="outOfAppLink">
                  <span className="int-en">Metrics</span>
                  <span className="int-he">מדדים</span>
              </a>
              <a href="/terms" className="outOfAppLink">
                  <span className="int-en">Terms of Use</span>
                  <span className="int-he">תנאי שימוש</span>
              </a>
              <a href="/privacy-policy" className="outOfAppLink">
                  <span className="int-en">Privacy Policy</span>
                  <span className="int-he">מדיניות הפרטיות</span>
              </a>
          </div>

          <div className="section">
              <div className="header">
                      <span className="int-en">Tools</span>
                      <span className="int-he">כלים</span>
              </div>
              <a href="/educators" className="outOfAppLink">
                  <span className="int-en">Teach with Sefaria</span>
                  <span className="int-he">למד באמצעות ספריא</span>
              </a>
              <a href="/sheets" className="outOfAppLink">
                  <span className="int-en">Source Sheets</span>
                  <span className="int-he">דפי מקורות</span>
              </a>
              <a href="/visualizations" className="outOfAppLink">
                  <span className="int-en">Visualizations</span>
                  <span className="int-he">תרשימים גרפיים</span>
              </a>
              <a href="/mobile" className="outOfAppLink">
                  <span className="int-en">Mobile Apps</span>
                  <span className="int-he">ספריא בנייד</span>
              </a>
              <a href="/torah-tab" className="outOfAppLink">
                  <span className="int-en">Torah Tab</span>
                  <span className="int-he">תורה טאב</span>
              </a>
              <a href="/people" className="outOfAppLink">
                  <span className="int-en">Authors</span>
                  <span className="int-he">מחברים</span>
              </a>
              <a href="/groups" className="outOfAppLink">
                  <span className="int-en">Groups</span>
                  <span className="int-he">קבוצות</span>
              </a>
              <a href="/updates" className="outOfAppLink">
                  <span className="int-en">New Additions</span>
                  <span className="int-he">עדכונים</span>
              </a>
          </div>

          <div className="section">
              <div className="header">
                  <span className="int-en">Developers</span>
                  <span className="int-he">מפתחים</span>
              </div>
              <a href="/developers" target="_blank" className="outOfAppLink">
                  <span className="int-en">Get Involved</span>
                  <span className="int-he">הצטרף אלינו</span>
              </a>
              <a href="/developers#api" target="_blank" className="outOfAppLink">
                  <span className="int-en">API Docs</span>
                  <span className="int-he">מסמכי API</span>
              </a>
              <a href="https://github.com/Sefaria/Sefaria-Project" target="_blank" className="outOfAppLink">
                  <span className="int-en">Fork us on GitHub</span>
                  <span className="int-he">זלגו חופשי מגיטהאב</span>
              </a>
              <a href="https://github.com/Sefaria/Sefaria-Export" target="_blank" className="outOfAppLink">
                  <span className="int-en">Download our Data</span>
                  <span className="int-he">הורד את בסיס הנתונים שלנו</span>
              </a>
          </div>

          <div className="section">
              <div className="header">
                  <span className="int-en">Join Us</span>
                  <span className="int-he">הצטרף אלינו</span>
              </div>
              <a href="https://sefaria.nationbuilder.com/supportsefaria" className="outOfAppLink">
                  <span className="int-en">Donate</span>
                  <span className="int-he">תרומות</span>
              </a>
              <a href="/supporters" className="outOfAppLink">
                  <span className="int-en">Supporters</span>
                  <span className="int-he">תומכים</span>
              </a>
              <a href="/contribute" target="_blank" className="outOfAppLink">
                  <span className="int-en">Contribute</span>
                  <span className="int-he">הצטרף</span>
              </a>
              <a href="/jobs" className="outOfAppLink">
                  <span className="int-en">Jobs</span>
                  <span className="int-he">דרושים</span>
              </a>
          </div>

          <div className="section last connect">
              <div className="header connect">
                  <span className="int-en">Connect</span>
                  <span className="int-he">התחבר</span>
              </div>
              <NewsletterSignUpForm contextName="Footer" />
              <LikeFollowButtons />
              <a href={fbURL} target="_blank" className="outOfAppLink">
                <span className="int-en">Facebook</span>
                <span className="int-he">פייסבוק</span>
              </a>
              &bull;
              <a href="https://twitter.com/SefariaProject" target="_blank" className="outOfAppLink">
                <span className="int-en">Twitter</span>
                <span className="int-he">טוויטר</span>

              </a>
              <br />
              <a href="https://www.youtube.com/user/SefariaProject" target="_blank" className="outOfAppLink">
                  <span className="int-en">YouTube</span>
                  <span className="int-he">יוטיוב</span>
              </a>
              &bull;
              <a href={blgURL} target="_blank" className="outOfAppLink">
                  <span className="int-en">Blog</span>
                  <span className="int-he">בלוג</span>
              </a>
              <br />
              <a href="https://www.instagram.com/sefariaproject/" target="_blank" className="outOfAppLink">
                  <span className="int-en">Instagram</span>
                  <span className="int-he">אינסטגרם</span>

              </a>
              &bull;
              <a href="mailto:hello@sefaria.org" target="_blank" className="outOfAppLink">
                  <span className="int-en">Email</span>
                  <span className="int-he">דוא&quot;ל</span>
              </a>
              <div id="siteLanguageToggle">
                  <div id="siteLanguageToggleLabel">
                      <span className="int-en">Site Language</span>
                      <span className="int-he">שפת האתר</span>
                  </div>
                  <a href={"/interface/english?next=" + next} id="siteLanguageEnglish" className="outOfAppLink"
                     onClick={this.trackLanguageClick.bind(null, "English")}>English
                  </a>
                  |
                  <a href={"/interface/hebrew?next=" + next} id="siteLanguageHebrew" className="outOfAppLink"
                      onClick={this.trackLanguageClick.bind(null, "Hebrew")}>עברית
                  </a>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}


class LikeFollowButtons extends Component {
  componentDidMount() {
    this.loadFacebook();
    this.loadTwitter();
  }
  loadFacebook() {
    if (typeof FB !== "undefined") {
       FB.XFBML.parse();
    } else {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = Sefaria.interfaceLang ==  "hebrew" ? 
          "https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v2.10&appId=206308089417064"
          : "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=206308089417064";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));        
    }
  }
  loadTwitter() {
    if (typeof twttr !== "undefined") {
      if ("widgets" in twttr) {
        twttr.widgets.load();        
      }
    } else {
      window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };

        return t;
      }(document, "script", "twitter-wjs"));      
    }
  }
  render() {
    var fbURL = Sefaria.interfaceLang == "hebrew" ? "https://www.facebook.com/sefaria.org.il" : "https://www.facebook.com/sefaria.org";
    var lang = Sefaria.interfaceLang.substring(0,2);
    return (<div id="socialButtons">
              <div id="facebookButton">
                <div className="fb-like" 
                  data-href={fbURL} 
                  data-layout="button" 
                  data-action="like" 
                  data-size="small" 
                  data-show-faces="false" 
                  data-share="true"></div>
              </div>
              <div id="twitterButton">
                <a className="twitter-follow-button"
                  href="https://twitter.com/SefariaProject"
                  data-show-screen-name="false"
                  data-show-count="false"
                  data-lang={lang}></a>
              </div>
            </div>);
  }
}


module.exports = Footer;