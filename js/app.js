ssocket = new SonicSocket({ alphabet: '0123456789' });

function onButton() {
    ssocket.send('31415');
}