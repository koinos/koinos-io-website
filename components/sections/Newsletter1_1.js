

export default function Newsletter1_1() {
    return (
        <>
            <section id="newsletter-1" className="newsletter-section">
                <div className="newsletter-overlay">
                    <div className="container">
                        <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
                            {/* NEWSLETTER TEXT */}
                            <div className="col">
                                <div className="newsletter-txt">
                                    <h4 className="s-34 w-700">Stay up to date with our newsletter</h4>
                                </div>
                            </div>
                            {/* NEWSLETTER FORM */}
                            <div className="col">
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" autoComplete="off" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn--theme hover--theme">Subscribe Now</button>
                                        </span>
                                    </div>
                                    {/* Newsletter Form Notification */}
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                            </div>	  {/* END NEWSLETTER FORM */}
                        </div>	  {/* End row */}
                    </div>    {/* End container */}
                </div>     {/* End newsletter-overlay */}
            </section>
        </>
    )
}

/**Ron (koinos.io), [24/11/23 17:11]
<div class="ff-6197d6721041f04103c0e585" data-ff-el="root" data-ff-version="3" data-ff-type="popup" data-ff-name="popupNoImage">
  <!--tpl {% block config %} tpl-->
  <div data-ff-el="config" data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8va29pbm9zLmlvIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6ZmFsc2UsIm5vdGlmaWNhdGlvbiI6ZmFsc2V9" style="display: none"></div>
  <!--tpl {% endblock %} tpl-->
  <div class="ff-6197d6721041f04103c0e585__modal fd-modal" data-ff-el="modal">
    <div class="ff-6197d6721041f04103c0e585__modal-dialog fd-modal__dialog" data-ff-el="modal-dialog">
      <div class="ff-6197d6721041f04103c0e585__modal-content fd-modal__content" data-ff-el="modal-content">
        <div class="ff-6197d6721041f04103c0e585__modal-body fd-modal__body" data-ff-el="modal-body">
          <div class="ff-6197d6721041f04103c0e585__wrapper">
            <form class="ff-6197d6721041f04103c0e585__form" action="https://form.flodesk.com/forms/6197d6721041f04103c0e585/submit" method="post" data-ff-el="form">
              <div class="ff-6197d6721041f04103c0e585__title">
                <div>Join our mailing list.</div>
              </div>
              <div class="ff-6197d6721041f04103c0e585__subtitle">
                <div>
                  <div data-paragraph="true">Be the first to know about everything new at Koinos</div>
                </div>
              </div>
              <div class="ff-6197d6721041f04103c0e585__content fd-form-content" data-ff-el="content">
                <div class="ff-6197d6721041f04103c0e585__fields" data-ff-el="fields">
                  <!--tpl {% block fields %} tpl-->

                  <div class="ff-6197d6721041f04103c0e585__field fd-form-group">
                    <input id="ff-6197d6721041f04103c0e585-email" class="ff-6197d6721041f04103c0e585__control fd-form-control" type="text" maxlength="255" name="email" placeholder="Email address" data-ff-tab="email::submit" required />
                    <label for="ff-6197d6721041f04103c0e585-email" class="ff-6197d6721041f04103c0e585__label fd-form-label">Email address</label>
                  </div>

                  <input type="text" maxlength="255" name="confirm_email_address" style="display: none" />
                  <!--tpl {% endblock %} tpl-->
                </div>

                <div class="ff-6197d6721041f04103c0e585__footer" data-ff-el="footer">
                  <button type="submit" class="ff-6197d6721041f04103c0e585__button fd-btn" data-ff-el="submit" data-ff-tab="submit">
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
              <div class="ff-6197d6721041f04103c0e585__success fd-form-success" data-ff-el="success">
                <div data-paragraph="true">Thank you for subscribing!</div>
              </div>
              <div class="ff-6197d6721041f04103c0e585__error fd-form-error" data-ff-el="error"></div>
            </form>
          </div>
        </div>
        <button class="ff-6197d6721041f04103c0e585__modal-close fd-modal__close" data-ff-el="modal-close">

          <svg style="width: 1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.51 14.51">
            <line x1="1" y1="1" x2="13.51" y2="13.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
            <line x1="13.51" y1="1" x2="1" y2="13.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
          </svg>

Ron (koinos.io), [24/11/23 17:11]
</button>
      </div>
    </div>
  </div>
</div>
<script>
  (function(w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    var sm = d.createElement(t);
    sm.async = true;
    sm.type = 'module';
    sm.src = h + s + '.mjs' + v;
    f.parentNode.insertBefore(sm, f);
    var sn = d.createElement(t);
    sn.async = true;
    sn.noModule = true;
    sn.src = h + s + '.js' + v;
    f.parentNode.insertBefore(sn, f);
  })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
</script>
<script>
  window.fd('form:handle', {
    formId: '6197d6721041f04103c0e585',
    rootEl: '.ff-6197d6721041f04103c0e585',
  });
</script>
 */