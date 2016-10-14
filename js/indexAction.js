function imageEnlarge(small, large) {
	document.getElementById('largeImg').src = small;
    showPanel();
    hideAfterClick();
    setTimeout(function() {
        document.getElementById('largeImg').src = large;
    }, 1)
}
function showPanel() {
	document.getElementById('enlargedPanel').style.display = 'block';
}

function hideAfterClick() {
	if(document.selection)
        document.selection.empty();
    if(window.getSelection)
        window.getSelection().removeAllRanges();
}