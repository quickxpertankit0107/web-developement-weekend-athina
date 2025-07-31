// $(".btn3").click(function(){
//     $(".para1").toggle()
//     // $('.para1').hide()
// })

// code ontouch for mobile
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
    // Mobile: Use click
    $(".btn3").on("click", function () {
        $(".para1").toggle();
    });
} else {
    // Desktop: Use hover
    $(".btn3").hover(
        function () {
            $(".para1").show();
        },
        function () {
            $(".para1").hide();
        }
    );
}
