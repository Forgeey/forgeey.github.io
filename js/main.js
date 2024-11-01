$(document).ready(function() {
    const colored_background_loc = "/img/bg_colored.png";
    const text = ["a brony", "a gamer", "a new animator", "Forgeey!"];
    const RATIO = 0.6;
    setTimeout(() => {
        const $main_title_name = $("#main-title-name");
        let index = 0;
        let message_index = 0;

        function type() {
            if (index < text[message_index].length) {
                $main_title_name.append(text[message_index].charAt(index));
                index++;
                setTimeout(type, 100); // 每100毫秒输入一个字符
            } else if (message_index < text.length-1) {
                message_index++;
                setTimeout(clean, 1000);
            } else {
                setTimeout(() => {
                    $main_title_name.removeClass("typewriter");
                    $(".main-subtitle").css({
                        opacity: 1,
                        transform: "translateY(0)"
                    });
                    $("#bg-colored").fadeIn(1500);
                    $(".content").fadeIn(1500);
                    // TODO: set bg color to the image bg color
                }, 1000);
            }
        }

        function clean() {
            if (index > 0) {
                $main_title_name.text($main_title_name.text().slice(0, -1));
                index--;
                setTimeout(clean, 25);
            } else {
                setTimeout(type, 500);
            }
        }
        $("#bg-draft").fadeIn(1000, () => {
            const img = new Image();
            img.src = colored_background_loc;
            $(".main-title").fadeIn(1000, type);
        });
    }, 2000);
    $(".content").css("top", $(window).width()*RATIO);
    $(window).resize(() => {
        $(".content").css("top", $(window).width()*RATIO);
    });
});
