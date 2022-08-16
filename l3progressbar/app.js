var getprogressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
	// console.log('hi');

	getdownloadbtn.setAttribute("disabled",true);

	var setwidth = 0;

	var setinv = setInterval(progressinc,100);

	function progressinc(){
		if(setwidth >= 100){
			clearInterval(setinv);
			window.location.href = seturl;
		}else{
			setwidth++;

			getprogressbar.style.width = `${setwidth}%`;
			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
		}
	}

});



// 10PG