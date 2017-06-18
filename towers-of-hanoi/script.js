'use strict';

$(document).ready(function() {

// Draggable item
  $('[data-block]').draggable({
    revert: "invalid"});
// Droppable area & drop function
  $('[data-stack]').droppable({
    drop: function(event, ui) {

    var drag = $(ui.draggable).attr('data-block');
    var lastChild = $(this).children().last()[0];
    var lastChildval = $(lastChild).attr('data-block');
    if (parseInt(drag) > parseInt(lastChildval)) {
      $(ui.draggable).draggable('option','revert',true);
    } else {
    $(ui.draggable).appendTo(this).attr('style', 'position: relative');
    }
    }
  });
});
