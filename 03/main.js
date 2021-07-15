console.clear();
let state = false;
let moveX = [
    {
        target: "#arm_left",
        position: [0, -400],
        coordinate: "x"
    },

    {
        target: "#arm_right",
        position: [0, 400],
        coordinate: "x"
    },
]
let moveY =
    {
        target: "#head",
        position: [100, 0],
        scale: [1, .9]
    }
let eyesAll = [
    {
        target: "#eye_left",
        scale: [1, .5]
    },
    {
        target: "#eye_right",
        scale: [1, .5]
    }
]

$('.robot').load('robot.svg', function (res) {

    eyes();
    $("#green_dot").click(function () {
        state = !state;
        actionX();
        actionY();
        scaleY();
    })
})
function actionX() {
    $.each(moveX, function (i, k) {

        let x = state ? k.position[0] : k.position[1];
        anime({
            targets: k.target,
            translateX: x
        })
    })
}

function actionY() {
    let y = state ? moveY.position[0] : moveY.position[1];
    anime({
        targets: moveY.target,
        translateY: y
    })
}

function scaleY() {
    let scaleY = state ? moveY.scale[0] : moveY.scale[1];
    anime({
        targets: moveY.target,
        scaleY: scaleY
    })

}
