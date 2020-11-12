$(document).ready(function() {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $(this).children('span').removeClass('fa-pause').addClass('fa-play');
        } else {
            $("#mycarousel").carousel('cycle');
            $(this).children('span').removeClass('fa-play').addClass('fa-pause');
        }
    })

    $("#reserveTableButton").click(function() {
        $("#reserveTableModal").modal();
    });

    $("#loginModalButton").click(function() {
        $("#loginModal").modal();
    });

})