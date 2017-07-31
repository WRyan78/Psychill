// music array
var selectSong = [
	 "https://www.youtube.com/watch?v=mQ8moLn3e-k",
	 "https://www.youtube.com/watch?v=NpOtkhBcc8k",
	 "https://www.youtube.com/watch?v=0SUCWB_0bqw",
	 "https://www.youtube.com/watch?v=mJkaGXFLO7U",
	 "https://www.youtube.com/watch?v=ZK3U92URi_c",
	 "https://www.youtube.com/watch?v=mUUc_APqHOE",
	 "https://www.youtube.com/watch?v=b8OELzmpgZo&list=PLB9FB4E1138286D3C",
	 "https://www.youtube.com/watch?v=jhvqQ9orRrs",
	 "https://www.youtube.com/watch?v=gIxuJQ1HAmc",
	 "https://www.youtube.com/watch?v=uL0mvPZuklM",
	 "https://www.youtube.com/watch?v=guXMb7zLblM"
];
// function to generate random link
var pickASong = function () {
var todaysSong = selectSong[Math.floor(Math.random() * selectSong.length)];
return todaysSong;
};
//'pickASong()' to call function, = return random link from the array

// function to open a new tab and insert value from pickASong function  
function openNewTab(url) {
  var win = window.open(pickASong(), '_blank');
  win.focus();
};

// event listener listening for the button to be clicked
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("click").addEventListener("click", openNewTab);
});
 
 