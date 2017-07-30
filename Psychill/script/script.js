var myArray = [
	1: 'https://www.youtube.com/watch?v=mQ8moLn3e-k',
	2: 'https://www.youtube.com/watch?v=NpOtkhBcc8k',
	3: 'https://www.youtube.com/watch?v=0SUCWB_0bqw'
]


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}