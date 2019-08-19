$(document).ready(function(){
    $("#sd").addClass("hide");

    $("#sidebarShow").click(function(){
        $("#sd").removeClass("hide");
    });
    $("#sidebarCollapse").click(function(){
        $("#sd").addClass("hide");
    });
});