var blocks = document.querySelectorAll('.mdn-intl-outer');
var closers = document.querySelectorAll('.dd-closing');

for (var close of closers) {
    close.addEventListener("click", closeBlock);
    // close.addEventListener("hover", changeMouse);
}

function closeBlock(e) {
    let topLeft = document.getElementById("mdn-top-left");
    let topCenter = document.getElementById("mdn-top-center");

    let topRight = document.getElementById("mdn-top-right");
    let btmLeft = document.getElementById("mdn-btm-left");
    let btmCenter = document.getElementById("mdn-btm-center");
    let btmRight = document.getElementById("mdn-btm-right");

    if (event.target.classList.contains('closing-op')) {
        topCenter.classList.toggle("dd-top-left");

        topRight.classList.remove("dd-top-left");
        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        // topCenter.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");

    }

    if (event.target.classList.contains('closing-cr')) {
        topLeft.classList.toggle("dd-top-left");

        topRight.classList.remove("dd-top-left");
        // topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
    }
    if (event.target.classList.contains('closing-op')) {
        topCenter.classList.toggle("dd-top-left");

        topRight.classList.remove("dd-top-left");
        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        // topCenter.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
    }
    if (event.target.classList.contains('closing-sar')) {
        btmLeft.classList.toggle("dd-top-left");

        topRight.classList.remove("dd-top-left");
        topLeft.classList.remove("dd-top-left");
        // btmLeft.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
    }
    if (event.target.classList.contains('closing-reu')) {
        btmCenter.classList.toggle("dd-top-left");

        topRight.classList.remove("dd-top-left");
        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
        // btmCenter.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
    }
    if (event.target.classList.contains('closing-tys')) {
        btmRight.classList.toggle("dd-top-left");

        topRight.classList.remove("dd-top-left");
        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        // btmRight.classList.remove("dd-top-left");
    }
}


for (var block of blocks) {
    block.addEventListener("click", expandBlock, true);
}

function expandBlock(event) {
    // console.log('works!');
    let topLeft = document.getElementById("mdn-top-left");
    let topCenter = document.getElementById("mdn-top-center");

    let topRight = document.getElementById("mdn-top-right");
    let btmLeft = document.getElementById("mdn-btm-left");

    let btmCenter = document.getElementById("mdn-btm-center");
    let btmRight = document.getElementById("mdn-btm-right");

    if (event.target.classList.contains('intl-cr')) {
        topLeft.classList.toggle("dd-top-left");
        topRight.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");

        btmCenter.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
    }


    if (event.target.classList.contains('intl-op')) {

        topCenter.classList.toggle("dd-top-left");
        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        topRight.classList.remove("dd-top-left");
    }

    if (event.target.classList.contains('intl-sra')) {
        btmLeft.classList.toggle("dd-top-left");

        topLeft.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
        topRight.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");

    }
    if (event.target.classList.contains('intl-ibp')) {

        topRight.classList.toggle("dd-top-left");

        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
    }

    if (event.target.classList.contains('intl-reu')) {

        btmCenter.classList.toggle("dd-top-left");

        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        topRight.classList.remove("dd-top-left");
        btmRight.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
    }


    if (event.target.classList.contains('intl-tys')) {

        btmRight.classList.toggle("dd-top-left");

        topLeft.classList.remove("dd-top-left");
        btmLeft.classList.remove("dd-top-left");
        topRight.classList.remove("dd-top-left");
        btmCenter.classList.remove("dd-top-left");
        topCenter.classList.remove("dd-top-left");
    }




    // Depending on the target, change dd-top-right to block

}