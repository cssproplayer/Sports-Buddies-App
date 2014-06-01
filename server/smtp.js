Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://toesnotmatter:ihackyou1youhackme@smtp.sendgrid.net:587';
    Email.send({
      from: "camroman95@gmail.com",
      to: "dylan.kojicheslin@gmail.com",
      subject: "Subject",
      text: "Here is some text"
  });
});

