$(document).ready(function () {
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn",
        },
        out:{
            effect: "bounceOut",
        },

    });

});


// $(document).ready(function () {
//     $('.text').textillate({
//         loop: true,
//         sync: true,
//         in: {
//             effect: "bounceIn", // Animation for text appearing
//             delayScale: 1.5,
//             delay: 50,
//             sync: true,
//         },
//         out: {
//             effect: "bounceOut", // Animation for text disappearing
//             delayScale: 1.5,
//             delay: 50,
//             sync: true,
//         },
//     });
// });