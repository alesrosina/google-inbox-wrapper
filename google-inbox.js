var unreadOld = 0;
setInterval(function() {
  try {
    var unread = document.body.querySelectorAll('div.G3').length;
    var newTitle = document.title.split('–');
    if(unread === 0) {
      newTitle[0] = 'Inbox ';
    } else {
      newTitle[0] = 'Inbox (' + unread + ') ';
    }
    document.title = newTitle.join('–');
    if(unreadOld < unread) {
      unreadOld = unread;
      if(unread === 1) {
        var notifTitle = document.body.querySelectorAll('div.G3')[0].parentNode.childNodes[3].innerText;
        var notifIcon = document.body.querySelectorAll('div.G3')[0].parentNode.parentNode.parentNode.querySelectorAll('.gi.ej')[0].getAttribute('src');
        var notifTextTitle = document.body.querySelectorAll('div.G3')[0].parentNode.parentNode.parentNode.querySelectorAll('div.No')[0].childNodes[1].innerText;

        var notifTextContent = document.body.querySelectorAll('div.G3')[0].parentNode.parentNode.parentNode.querySelectorAll('div.No')[0].childNodes[3].innerText;

        new Notification(notifTitle + ' - ' + notifTextTitle, {body: notifTextContent});
      } else if (unread > 1) {
        //TODO this one should show only at first start, otherwise show for every new mail new notification
        new Notification(unread + ' new emails', {body: 'You have ' + unread + ' unread messages.'});
      }
    }
  } catch(e) {}
}, 1000);
