// music array
var selectSong = [
	 "https://www.youtube.com/watch?v=0SUCWB_0bqw",
	 "https://www.youtube.com/watch?v=ZK3U92URi_c",
	 "https://www.youtube.com/watch?v=mUUc_APqHOE",
	 "https://www.youtube.com/watch?v=b8OELzmpgZo&list=PLB9FB4E1138286D3C",
	 "https://www.youtube.com/watch?v=jhvqQ9orRrs",
	 "https://www.youtube.com/watch?v=uL0mvPZuklM",
	 "https://www.youtube.com/watch?v=guXMb7zLblM",
	 "https://www.youtube.com/watch?v=2APzMIXoHQg",
	 "https://www.youtube.com/watch?v=FN9WmeF7F60",
	 "https://www.youtube.com/watch?v=bK6e7dZDZVw",
	 "https://www.youtube.com/watch?v=ORNfEC1q2EU",
	 "https://www.youtube.com/watch?v=sl9rxITenzQ",
	 "https://www.youtube.com/watch?v=grWRSyptTnk",
	 "https://www.youtube.com/watch?v=4TuY06d7ZBI",
	 "https://www.youtube.com/watch?v=7UgLrh8_qE8",
	 "https://www.youtube.com/watch?v=NH-TKcywf4Y"
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
 
 
