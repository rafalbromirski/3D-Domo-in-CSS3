    $(function() {
        var xyz = {};
        xyz.x = $("input[name=x_axis]").val() || 0;
        xyz.y = $("input[name=y_axis]").val() || 0;
        xyz.z = $("input[name=z_axis]").val() || 0;

        $(".perspective").css("-webkit-transform", "rotateX(" + xyz.x + "deg) rotateY(" + xyz.y + "deg) rotateZ(" + xyz.z + "deg)");

        $("input[type=range]").on("change", function() {
            if ($(this).attr("name") == "x_axis") {
                xyz.x = $(this).val();
            }
            else if ($(this).attr("name") == "y_axis") {
                xyz.y = $(this).val();
            }
            else if ($(this).attr("name") == "z_axis") {
                xyz.z = $(this).val();
            }

            $(".perspective").css("-webkit-transform", "rotateX(" + xyz.x + "deg) rotateY(" + xyz.y + "deg) rotateZ(" + xyz.z + "deg)");
        });

        var mvar = 0.01;
        var offset = 10;


        $("body").bind("mousemove touchstart", function(e) {
            var cx = $(document).width() * 0.5;
            var cy = $(document).height() * 0.5;

            var ex = e.pageX || e.originalEvent.touches[0].pageX;
            var ey = e.pageY || e.originalEvent.touches[0].pageY;

            var xx = ((cy - ey) / cy) * 55;
            var yy = ((cx - ex) / cx) * (-50);
            $(".perspective").css("-webkit-transform", "rotateX(" + xx + "deg) rotateY(" + yy + "deg) rotateZ(" + xyz.z + "deg)");
        });
    });