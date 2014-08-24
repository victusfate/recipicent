function closeIframe() {
    window.parent.ClosePop();
}

function ClosePop() {
    var iframe = $('.modal')[0];
    console.log('iframe',iframe);
    document.body.removeChild(iframe); // remove div
}