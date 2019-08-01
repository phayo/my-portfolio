
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);
$(document).ready(function(){
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
   });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        $('.collapse.in').toggleClass('in');
    });
});