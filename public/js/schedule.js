$(document).ready(function(){
  $("#schedule").fullCalendar({
    weekends: false,
    defaultView:'agendaWeek',
    minTime: "08:0:00",
    maxTime: "18:00:00",
    slotDuration: "00:15:00",
    allDaySlot: false,
    themeSystem: 'bootstrap3',
    header: false,
    selectable: true,
    selectHelper: true,
    selectOverlap: false,
    contentHeight: 700,
    editable: true,
    eventColor: '#FE4365',
    eventBorderColor: "#FC9D9A",
    select: function(startDate, endDate, jsEvent, view, [ressource]){},
  });
});
