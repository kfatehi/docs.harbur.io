$(document).ready(function(){
    $("#toctree ul").addClass("nav").addClass("nav-pills").addClass("nav-stacked");
    $("li.toctree-l2 a").css("padding", "5px 15px").css("margin-top","5px");
    $("li.toctree-l2").css("margin-left", "20px");
    $("li.current:last").addClass("active");
    $("#toctree").show();
});