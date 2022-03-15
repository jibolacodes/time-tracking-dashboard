const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
const currentTime = document.querySelectorAll(".currentTime");
const previousTime = document.querySelectorAll(".previousTime");

async function fetchData() {
	const resp = await fetch('../data.json');
	const data = await resp.json();
	daily(data);
	uploadData(data);
}
fetchData();

function uploadData(data){
	dailyBtn.addEventListener("click", function(){
		daily(data);
	})
	weeklyBtn.addEventListener("click", function(){
		weekly(data);
	})
	monthlyBtn.addEventListener("click", function(){
		monthly(data);
	})
}

function daily(data){
	currentTime.forEach(function(time){
		for(let i = 0; i < data.length; i++){
			if(time.dataset.id === data[i].title) {
				time.innerHTML = `${data[i].timeframes.daily.current}hrs`;
			}
		}
	})

	previousTime.forEach(function(time){
		for(let i = 0; i < data.length; i++){
			if(time.dataset.id === data[i].title) {
				time.innerHTML = `Last week - ${data[i].timeframes.daily.previous}hrs`;
			}
		}
	})
}

window.onload = daily;

function weekly(data){
	currentTime.forEach(function(time){
		for(let i = 0; i < data.length; i++){
			if(time.dataset.id === data[i].title) {
				time.innerHTML = `${data[i].timeframes.weekly.current}hrs`;
			}
		}
	})

	previousTime.forEach(function(time){
		for(let i = 0; i < data.length; i++){
			if(time.dataset.id === data[i].title) {
				time.innerHTML = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
			}
		}
	})
}

function monthly(data){
	currentTime.forEach(function(time){
		for(let i = 0; i < data.length; i++){
			if(time.dataset.id === data[i].title) {
				time.innerHTML = `${data[i].timeframes.monthly.current}hrs`;
			}
		}
	})

	previousTime.forEach(function(time){
		for(let i = 0; i < data.length; i++){
			if(time.dataset.id === data[i].title) {
				time.innerHTML = `Last week - ${data[i].timeframes.monthly.previous}hrs`;
			}
		}
	})
}

