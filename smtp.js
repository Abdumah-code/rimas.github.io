/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var people = document.getElementById('people').value;
    var diet = document.getElementById('diet').value;
  
    var body = 'Name: ' + name + '\n';
    body += 'Email: ' + email + '\n';
    body += 'Mobile Number: ' + phone + '\n';
    body += 'Antal Gäster: ' + people + '\n';
    body += 'Preferenser: ' + diet + '\n';
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "abdumah2021fr@gmail.com",
      Password: "50298C3F974A208A809110EE1A45FF404A30",
      To: 'abdullahtillabd2014@gmail.com',
      From: "",
      Subject: "Form Submission",
      Body: body
    }).then(function (message) {
      alert(message);
    });
  });