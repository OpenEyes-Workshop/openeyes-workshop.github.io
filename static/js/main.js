$(document).ready(function(){
  function diff_now(reference) {
    var now = new Date();
    var diff_ms = reference - now;
    if (diff_ms < 0) {
      return "";
    }
    var days = Math.floor(diff_ms / (24 * 60 * 60 * 1000))
    diff_ms -= days * (24 * 60 * 60 * 1000);
    var hours = Math.floor(diff_ms / (60 * 60 * 1000))
    diff_ms -= hours * (60 * 60 * 1000);
    var mins = Math.floor(diff_ms / (60 * 1000))
    diff_ms -= mins * (60 * 1000);
    var secs = Math.floor(diff_ms / 1000)
    var out_str = "";
    if (days > 0) out_str += days.toString() + "d ";
    if (hours > 0) out_str += hours.toString() + "h ";
    if (mins > 0) out_str += mins.toString() + "m ";
    if (secs > 0) out_str += secs.toString() + "s ";
    return out_str + "left";
  }
  var countdown_els = $('span.countdown');
  function update_all_timediffs() {
    countdown_els.each(function(i, el) {
      var time_string = $(el).attr('reference');
      var date_object = new Date(time_string);
      var diff_string = diff_now(date_object);
      el.innerHTML = diff_string;
    });
  }
  update_all_timediffs();
  window.setInterval(update_all_timediffs, 1000);
})

