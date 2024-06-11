// journey side bar toggle
document.getElementById('one').addEventListener('click', function() {
    document.getElementById('leftbar').classList.toggle('active');
    document.getElementById('journey-board').classList.toggle('active');
});

document.getElementById('head-board').addEventListener('click', function() {
    document.getElementById('leftbar').classList.toggle('active');
    document.getElementById('journey-board').classList.toggle('active');
});

// toggle introduction
document.getElementById('intro-click').addEventListener('click', function() {
    commontoggle('Introduction', 'intro-content');
});

// toggle thread A in 4SA method
document.getElementById('thread-4sa').addEventListener('click', function() {
    commontoggle('thread-4sa-angle', '4sa');
});
// toggle thread A 
document.getElementById('thread_id').addEventListener('click', function() {
    commontoggle('get-angle', 'thread-toggle');
});

function commontoggle(angle_id, toggle_id) {
    const element = document.getElementById(angle_id);
    if (element.classList.contains('fa-angle-up')) {
        element.classList.remove('fa-angle-up');
        element.classList.add('fa-angle-down');
        document.getElementById(toggle_id).classList.add('active');
    } else {
        element.classList.remove('fa-angle-down');
        element.classList.add('fa-angle-up');
        document.getElementById(toggle_id).classList.remove('active');
    }
}






