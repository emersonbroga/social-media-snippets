// https://emersonbroga.com/?s=javascript&action=learn'
const urlParams = new URLSearchParams(window.location.search);

urlParams.has('s');
// true

urlParams.get('s');
// javascript

urlParams.getAll('action');
// [learn]

urlParams.toString();
// s=javascript&action=learn

urlParams.append('follow', 'emersonbrogadev');
// https://emersonbroga.com/?s=javascript&action=learn&follow=emersonbrogadev
