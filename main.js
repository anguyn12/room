document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });

    document.querySelector('#ring').addEventListener('click', function (e) {
        document.querySelector('#main-camera').emit('ring-clicked');
        document.querySelector('#sofa').emit('ring-clicked');
        document.querySelector('#room').emit('ring-clicked');
        document.querySelector('#tvshr').emit('ring-clicked');
        document.querySelector('#tv-desk').emit('ring-clicked');
        document.querySelector('#rem').emit('ring-clicked');
        document.querySelector('#loa').emit('ring-clicked');
        document.querySelector('#tv').emit('ring-clicked');
        document.querySelector('#image').emit('ring-clicked');
        document.querySelector('#image-1').emit('ring-clicked');
        document.querySelector('#plane').emit('ring-clicked');
        document.querySelector('#ring-1').emit('ring-clicked');
        document.querySelector('#image-2').emit('ring-clicked');
        document.querySelector('#text').emit('ring-clicked');
        document.querySelector('#text-1').emit('ring-clicked');
        document.querySelector('#text-2').emit('ring-clicked');
    });

    document.querySelector('#ring-1').addEventListener('click', function (e) {
        document.querySelector('#main-camera').emit('ring-1-clicked');
        document.querySelector('#sofa').emit('ring-1-clicked');
        document.querySelector('#room').emit('ring-1-clicked');
        document.querySelector('#tvshr').emit('ring-1-clicked');
        document.querySelector('#tv-desk').emit('ring-1-clicked');
        document.querySelector('#rem').emit('ring-1-clicked');
        document.querySelector('#loa').emit('ring-1-clicked');
        document.querySelector('#tv').emit('ring-1-clicked');
    });

    document.querySelector('#image-1').addEventListener('click', function (e) {
        document.querySelector('#image').emit('image-1-clicked');
        document.querySelector('#plane').emit('image-1-clicked');
        document.querySelector('#image-2').emit('image-1-clicked');
        document.querySelector('#text').emit('image-1-clicked');
        document.querySelector('#text-1').emit('image-1-clicked');
        document.querySelector('#text-2').emit('image-1-clicked');
    });

    document.querySelector('#image-2').addEventListener('click', function (e) {
        document.querySelector('#image').emit('image-2-clicked');
        document.querySelector('#image-1').emit('image-2-clicked');
        document.querySelector('#plane').emit('image-2-clicked');
        document.querySelector('#text').emit('image-2-clicked');
        document.querySelector('#text-1').emit('image-2-clicked');
        document.querySelector('#text-2').emit('image-2-clicked');
    });

    document.querySelector('#room').addEventListener('click', function (e) {
        document.querySelector('#image').emit('room-clicked');
        document.querySelector('#image-1').emit('room-clicked');
        document.querySelector('#plane').emit('room-clicked');
        document.querySelector('#image-2').emit('room-clicked');
        document.querySelector('#text').emit('room-clicked');
        document.querySelector('#text-1').emit('room-clicked');
        document.querySelector('#text-2').emit('room-clicked');
    });

    document.querySelector('#image').addEventListener('click', function (e) {
        document.querySelector('#image-1').emit('image-clicked');
        document.querySelector('#plane').emit('image-clicked');
        document.querySelector('#image-2').emit('image-clicked');
        document.querySelector('#text').emit('image-clicked');
        document.querySelector('#text-1').emit('image-clicked');
        document.querySelector('#text-2').emit('image-clicked');
    });
});