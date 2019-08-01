$(document).ready(function(){
    $(".sidebar").hide();

    $('#sidebarCollapse').click(function () {
        $(".sidebar").hide();
    });

    $('#sidebarShow').click(function () {
        $(".sidebar").show();
    });
});