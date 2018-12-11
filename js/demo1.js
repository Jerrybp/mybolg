
 const ap8 = new APlayer({
    element: document.getElementById('player8'),
	autoplay: true,
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    lrcType: 3,
    fixed: true,
	audio: [{
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }]
 });

 ap8.on('play', function () {
   console.log('play');
   
 });
 ap8.on('play', function () {
   console.log('play play');
 });
 ap8.on('pause', function () {
   console.log('pause');
 });
 ap8.on('canplay', function () {
   console.log('canplay');
 });
 ap8.on('playing', function () {
   console.log('playing');
 });
 ap8.on('ended', function () {
   console.log('ended');
 });
 ap8.on('error', function () {
   console.log('error');
 });
 