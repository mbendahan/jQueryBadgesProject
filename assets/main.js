$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/switchuy.json',
    dataType: 'jsonp',
    success: function(response) {
      populateCources(response.courses.completed);
    }
  });

  function populateCources(courses) {

    $badges = $("#badges");

    courses.forEach(function(course) {
      $div = $('<div />')
              .addClass('course')
              .appendTo($badges);

      $h3 = $('<h3 />')
              .html(course.title)
              .appendTo($div);

      $img = $('<img />')
              .attr('src', course.badge)
              .appendTo($div);

      $a = $('<a />')
            .attr('href', course.url)
            .addClass('btn btn-primary')
            .html('See Course')
            .appendTo($div);

      $div.appendTo($badges);
    })



  }

});
