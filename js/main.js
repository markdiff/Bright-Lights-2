$('.menu__btn').on('click', function(){
	$('.menu__items').toggleClass('menu__list--active');
});

const
		audio = document.querySelector('.player__audio'),
		player = document.querySelector('.player'),
		playBtn = document.querySelector('.player__button'),
		progressContainer = document.querySelector('.progress__contaier'),
		progress = document.querySelector('.progress'),
		imgSrc = document.querySelector('.player__button-play'),
		timeSong = document.querySelector('.current-time'),
		pause = document.querySelector('.track'),
		pause2 = document.querySelector('.track2')
		pause3 = document.querySelector('.track3')
		pause4 = document.querySelector('.track4')
		pause5 = document.querySelector('.track5')
		pause6 = document.querySelector('.track6')
// Play
function playSong(){
	player.classList.add('play')
	imgSrc.src = './img/pause.svg'
	audio.play()
	audio2.pause()
	audio3.pause()
	audio4.pause()
	audio5.pause()
	audio6.pause()
	audio7.pause()
}
// Pause
function pauseSong(){
	player.classList.remove('play')
	imgSrc.src = './img/header-play.svg'
	audio.pause()
}
playBtn.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if (isPlaying) {
		pauseSong()
	} else {
		playSong()
	}
})
// Progress Bar
function updateProgress(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent = (currentTime / duration) * 100
	progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)
// Set progress
function setProgress(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio.duration
	audio.currentTime = (clockX / width) * duration
}
progressContainer.addEventListener('click', setProgress)
// Autoplay
audio.addEventListener('ended', playSong)


//Time
var vid = document.getElementById("player");
vid.ontimeupdate = function() {myFunction()};
function myFunction() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d = parseInt((vid.currentTime)/60);
	var g = parseInt(vid.currentTime)%60;
	
	if(
	d<10)
	{document.getElementById("minutes").innerHTML = "0" + d + " ";
	}
	else
	{
	document.getElementById("minutes").innerHTML = " " + d + " ";
	}
	if(
	g<10)
	{
	document.getElementById("seconds").innerHTML = "0" + g ;
	}
	else{
	document.getElementById("seconds").innerHTML = " " + g ;
	}
}


// 2222222222222222

const
		audio2 = document.querySelector('.player__audio2'),
		player2 = document.querySelector('.player2'),
		playBtn2 = document.querySelector('.player__button2'),
		progressContainer2 = document.querySelector('.progress__contaier2'),
		progress2 = document.querySelector('.progress2'),
		imgSrc2 = document.querySelector('.player__button-play2'),
		timeSong2 = document.querySelector('.current-time2')
// Play
function playSong2(){
	player2.classList.add('play')
	imgSrc2.src = './img/pause.svg'
	audio2.play()
	audio.pause()
	audio3.pause()
	audio4.pause()
	audio5.pause()
	audio6.pause()
	audio7.pause()
}
// Pause
function pauseSong2(){
	player2.classList.remove('play')
	imgSrc2.src = './img/header-play.svg'
	audio2.pause()
}
playBtn2.addEventListener('click', () => {
	const isPlaying2 = player2.classList.contains('play')
	if (isPlaying2) {
		pauseSong2()
	} else {
		playSong2()
	}
})
// Progress Bar
function updateProgress2(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent2 = (currentTime / duration) * 100
	progress2.style.width = `${progressPercent2}%`
}
audio2.addEventListener('timeupdate', updateProgress2)
// Set progress2
function setProgress2(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio2.duration
	audio2.currentTime = (clockX / width) * duration
}
progressContainer2.addEventListener('click', setProgress2)
// Autoplay
audio2.addEventListener('ended', playSong2)


//Time
var vid2 = document.getElementById("player2");
vid2.ontimeupdate = function() {myFunction2()};
function myFunction2() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d2 = parseInt((vid2.currentTime)/60);
	var g2 = parseInt(vid2.currentTime)%60;
	
	if(
	d2<10)
	{document.getElementById("minutes2").innerHTML = "0" + d2 + " ";
	}
	else
	{
	document.getElementById("minutes2").innerHTML = " " + d2 + " ";
	}
	if(
	g2<10)
	{
	document.getElementById("seconds2").innerHTML = "0" + g2 ;
	}
	else{
	document.getElementById("seconds2").innerHTML = " " + g2 ;
	}
}



//3



const
		audio3 = document.querySelector('.player__audio3'),
		player3 = document.querySelector('.player3'),
		playBtn3 = document.querySelector('.player__button3'),
		progressContainer3 = document.querySelector('.progress__contaier3'),
		progress3 = document.querySelector('.progress3'),
		imgSrc3 = document.querySelector('.player__button-play3'),
		timeSong3 = document.querySelector('.current-time3')
// Play
function playSong3(){
	player3.classList.add('play')
	imgSrc3.src = './img/pause.svg'
	audio3.play()
	audio2.pause()
	audio.pause()
	audio4.pause()
	audio5.pause()
	audio6.pause()
	audio7.pause()
}
// Pause
function pauseSong3(){
	player3.classList.remove('play')
	imgSrc3.src = './img/header-play.svg'
	audio3.pause()
}
playBtn3.addEventListener('click', () => {
	const isPlaying3 = player3.classList.contains('play')
	if (isPlaying3) {
		pauseSong3()
	} else {
		playSong3()
	}
})
// Progress Bar
function updateProgress3(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent3 = (currentTime / duration) * 100
	progress3.style.width = `${progressPercent3}%`
}
audio3.addEventListener('timeupdate', updateProgress3)
function setProgress3(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio3.duration
	audio3.currentTime = (clockX / width) * duration
}
progressContainer3.addEventListener('click', setProgress3)
// Autoplay
audio3.addEventListener('ended', playSong3)


//Time
var vid3 = document.getElementById("player3");
vid3.ontimeupdate = function() {myFunction3()};
function myFunction3() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d3 = parseInt((vid3.currentTime)/60);
	var g3 = parseInt(vid3.currentTime)%60;
	
	if(
	d3<10)
	{document.getElementById("minutes3").innerHTML = "0" + d3 + " ";
	}
	else
	{
	document.getElementById("minutes3").innerHTML = " " + d3 + " ";
	}
	if(
	g3<10)
	{
	document.getElementById("seconds3").innerHTML = "0" + g3 ;
	}
	else{
	document.getElementById("seconds3").innerHTML = " " + g3 ;
	}
}


//444444


const
		audio4 = document.querySelector('.player__audio4'),
		player4 = document.querySelector('.player4'),
		playBtn4 = document.querySelector('.player__button4'),
		progressContainer4 = document.querySelector('.progress__contaier4'),
		progress4 = document.querySelector('.progress4'),
		imgSrc4 = document.querySelector('.player__button-play4'),
		timeSong4 = document.querySelector('.current-time4')
// Play
function playSong4(){
	player4.classList.add('play')
	imgSrc4.src = './img/pause.svg'
	audio4.play()
	audio2.pause()
	audio3.pause()
	audio.pause()
	audio5.pause()
	audio6.pause()
	audio7.pause()
}
// Pause
function pauseSong4(){
	player4.classList.remove('play')
	imgSrc4.src = './img/header-play.svg'
	audio4.pause()
}
playBtn4.addEventListener('click', () => {
	const isPlaying4 = player4.classList.contains('play')
	if (isPlaying4) {
		pauseSong4()
	} else {
		playSong4()
	}
})
// Progress Bar
function updateProgress4(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent4 = (currentTime / duration) * 100
	progress4.style.width = `${progressPercent4}%`
}
audio4.addEventListener('timeupdate', updateProgress4)
function setProgress4(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio4.duration
	audio4.currentTime = (clockX / width) * duration
}
progressContainer4.addEventListener('click', setProgress4)
// Autoplay
audio4.addEventListener('ended', playSong4)


//Time
var vid4 = document.getElementById("player4");
vid4.ontimeupdate = function() {myFunction4()};
function myFunction4() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d4 = parseInt((vid4.currentTime)/60);
	var g4 = parseInt(vid4.currentTime)%60;
	
	if(
	d4<10)
	{document.getElementById("minutes4").innerHTML = "0" + d4 + " ";
	}
	else
	{
	document.getElementById("minutes4").innerHTML = " " + d4 + " ";
	}
	if(
	g4<10)
	{
	document.getElementById("seconds4").innerHTML = "0" + g4 ;
	}
	else{
	document.getElementById("seconds4").innerHTML = " " + g4 ;
	}
}

//555


const
		audio5 = document.querySelector('.player__audio5'),
		player5 = document.querySelector('.player5'),
		playBtn5 = document.querySelector('.player__button5'),
		progressContainer5 = document.querySelector('.progress__contaier5'),
		progress5 = document.querySelector('.progress5'),
		imgSrc5 = document.querySelector('.player__button-play5'),
		timeSong5 = document.querySelector('.current-time5')
// Play
function playSong5(){
	player5.classList.add('play')
	imgSrc5.src = './img/pause.svg'
	audio5.play()
	audio2.pause()
	audio3.pause()
	audio4.pause()
	audio.pause()
	audio6.pause()
	audio7.pause()
}
// Pause
function pauseSong5(){
	player5.classList.remove('play')
	imgSrc5.src = './img/header-play.svg'
	audio5.pause()
}
playBtn5.addEventListener('click', () => {
	const isPlaying5 = player5.classList.contains('play')
	if (isPlaying5) {
		pauseSong5()
	} else {
		playSong5()
	}
})
// Progress Bar
function updateProgress5(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent5 = (currentTime / duration) * 100
	progress5.style.width = `${progressPercent5}%`
}
audio5.addEventListener('timeupdate', updateProgress5)
function setProgress5(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio5.duration
	audio5.currentTime = (clockX / width) * duration
}
progressContainer5.addEventListener('click', setProgress5)
// Autoplay
audio5.addEventListener('ended', playSong5)


//Time
var vid5 = document.getElementById("player5");
vid5.ontimeupdate = function() {myFunction5()};
function myFunction5() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d5 = parseInt((vid5.currentTime)/60);
	var g5 = parseInt(vid5.currentTime)%60;
	
	if(
	d5<10)
	{document.getElementById("minutes5").innerHTML = "0" + d5 + " ";
	}
	else
	{
	document.getElementById("minutes5").innerHTML = " " + d5 + " ";
	}
	if(
	g5<10)
	{
	document.getElementById("seconds5").innerHTML = "0" + g5 ;
	}
	else{
	document.getElementById("seconds5").innerHTML = " " + g5 ;
	}
}


//6666


const
		audio6 = document.querySelector('.player__audio6'),
		player6 = document.querySelector('.player6'),
		playBtn6 = document.querySelector('.player__button6'),
		progressContainer6 = document.querySelector('.progress__contaier6'),
		progress6 = document.querySelector('.progress6'),
		imgSrc6 = document.querySelector('.player__button-play6'),
		timeSong6 = document.querySelector('.current-time6')
// Play
function playSong6(){
	player6.classList.add('play')
	imgSrc6.src = './img/pause.svg'
	audio6.play()
	audio2.pause()
	audio3.pause()
	audio4.pause()
	audio5.pause()
	audio.pause()
	audio7.pause()
}
// Pause
function pauseSong6(){
	player6.classList.remove('play')
	imgSrc6.src = './img/header-play.svg'
	audio6.pause()
}
playBtn6.addEventListener('click', () => {
	const isPlaying6 = player6.classList.contains('play')
	if (isPlaying6) {
		pauseSong6()
	} else {
		playSong6()
	}
})
// Progress Bar
function updateProgress6(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent6 = (currentTime / duration) * 100
	progress6.style.width = `${progressPercent6}%`
}
audio6.addEventListener('timeupdate', updateProgress6)
function setProgress6(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio6.duration
	audio6.currentTime = (clockX / width) * duration
}
progressContainer6.addEventListener('click', setProgress6)
// Autoplay
audio6.addEventListener('ended', playSong6)


//Time
var vid6 = document.getElementById("player6");
vid6.ontimeupdate = function() {myFunction6()};
function myFunction6() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d6 = parseInt((vid6.currentTime)/60);
	var g6 = parseInt(vid6.currentTime)%60;
	
	if(
	d6<10)
	{document.getElementById("minutes6").innerHTML = "0" + d6 + " ";
	}
	else
	{
	document.getElementById("minutes6").innerHTML = " " + d6 + " ";
	}
	if(
	g6<10)
	{
	document.getElementById("seconds6").innerHTML = "0" + g6 ;
	}
	else{
	document.getElementById("seconds6").innerHTML = " " + g6 ;
	}
}


//7777

const
		audio7 = document.querySelector('.player__audio7'),
		player7 = document.querySelector('.player7'),
		playBtn7 = document.querySelector('.player__button7'),
		progressContainer7 = document.querySelector('.progress__contaier7'),
		progress7 = document.querySelector('.progress7'),
		imgSrc7 = document.querySelector('.player__button-play7'),
		timeSong7 = document.querySelector('.current-time7')
// Play
function playSong7(){
	player7.classList.add('play')
	imgSrc7.src = './img/pause.svg'
	audio7.play()
	audio2.pause()
	audio3.pause()
	audio4.pause()
	audio5.pause()
	audio6.pause()
	audio.pause()
}
// Pause
function pauseSong7(){
	player7.classList.remove('play')
	imgSrc7.src = './img/header-play.svg'
	audio7.pause()
}
playBtn7.addEventListener('click', () => {
	const isPlaying7 = player7.classList.contains('play')
	if (isPlaying7) {
		pauseSong7()
	} else {
		playSong7()
	}
})
// Progress Bar
function updateProgress7(e) {
	const {duration, currentTime} = (e.srcElement)
	const progressPercent7 = (currentTime / duration) * 100
	progress7.style.width = `${progressPercent7}%`
}
audio7.addEventListener('timeupdate', updateProgress7)
function setProgress7(e) {
	const width = this.clientWidth
	const clockX = e.offsetX
	const duration = audio7.duration
	audio7.currentTime = (clockX / width) * duration
}
progressContainer7.addEventListener('click', setProgress7)
// Autoplay
audio7.addEventListener('ended', playSong7)


//Time
var vid7 = document.getElementById("player7");
vid7.ontimeupdate = function() {myFunction7()};
function myFunction7() {
	// Показать текущую позицию воспроизведения в элементе p с id="demo"
	// Вычисляем кол-во минут, секунд и делаем корректный вывод в виде 00:00
	var d7 = parseInt((vid7.currentTime)/60);
	var g7 = parseInt(vid7.currentTime)%60;
	
	if(
	d7<10)
	{document.getElementById("minutes7").innerHTML = "0" + d7 + " ";
	}
	else
	{
	document.getElementById("minutes7").innerHTML = " " + d7 + " ";
	}
	if(
	g7<10)
	{
	document.getElementById("seconds7").innerHTML = "0" + g7 ;
	}
	else{
	document.getElementById("seconds7").innerHTML = " " + g7 ;
	}
}


pause.addEventListener('click', () => {
	playSong2()
})
pause2.addEventListener('click', () => {
	playSong3()
})
pause3.addEventListener('click', () => {
	playSong4()
})
pause4.addEventListener('click', () => {
	playSong5()
})
pause5.addEventListener('click', () => {
	playSong6()
})
pause6.addEventListener('click', () => {
	playSong7()
})

$('.track__name').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	focusOnSelect: true,
	asNavFor: '.playlist__inner',
	vertical: true,
	arrows: false
});
$('.playlist__inner').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.track__name',
	fade: true,
	arrows: false,
});

new Swiper('.tickets-slider', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spacesBetween: 0,
			slidesPerGroup: 1
		},
		666: {
			slidesPerView: 2,
			spacesBetween: 10,
			slidesPerGroup: 2
		},
		929: {
			slidesPerView: 3,
			spacesBetween: 10,
			slidesPerGroup: 3
		},
		970: {
			slidesPerView: 3,
			spacesBetween: 30,
			slidesPerGroup: 3
		} 
	},
});



	