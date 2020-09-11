var blocks = document.querySelectorAll('.mdn-intl-outer');
var closers = document.querySelectorAll('.dd-closing');

for (var close of closers) {
    close.addEventListener("click", closeBlock);
    // close.addEventListener("hover", changeMouse);
}

function closeBlock(e) {
    const allOpened = document.querySelectorAll('.parent-active');

    for (let single of allOpened) {

        single.nextElementSibling.classList.remove('dd-top-left');
        console.log(single);
        single.classList.remove('parent-active');


    }
}



document.querySelectorAll('.outer').forEach(item => {

    // Add event listener
    item.addEventListener('click', event => {
        const allOpened = document.querySelectorAll('.parent-active');

        for (let single of allOpened) {

            single.nextElementSibling.classList.remove('dd-top-left');
            console.log(single);
            single.classList.remove('parent-active');
            // single.classList.value.remove('parent-active');

        }

        // Toggle the dropdowns
        var clicked = event.target.closest('.outer');
        clicked.classList.add('parent-active');



        let hiddenOuter = clicked.nextElementSibling;
        hiddenOuter.classList.add('dd-top-left');



    })
})