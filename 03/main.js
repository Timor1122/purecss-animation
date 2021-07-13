console.clear();
let state = false;
let move = [
    {
        target: "#arm_left",
        position: [0, -400]
    },

    {
        target: "#arm_right",
        position: [0, 400]
    }
]
$('.robot').load('https://ax.minicg.com/temp/robot.svg', function (res) {

    $("#green_dot").click(function () {
        state = !state;
        action()
    })

});
function action() {
    $.each(move, function (i, k) {

        let x = state ? k.position[0] : k.position[1];
        anime({
            targets: k.target,
            translateX: x
        })
    })
}
