
// Containers
const inputsContainer = document.querySelector('.inputs-wrapper'),
	outContainer = document.querySelector('.out-wrapper');
// ----------------------------------------------------
//   Dates
// ----------------------------------------------------
const daysOut = document.querySelector('#day'),
	monthsOut = document.querySelector('#month'),
	yearsOut = document.querySelector('#year'),
	years = [];
 
let days = [];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let monthLength = 31;


	function yearsCount(){
		for(let y = 1900; y <= 2021; y++){
			years.push(y);
		}
	};

	function daysCount(max = 31){
		days.length = 0;
		for(let d = 1; d <= max; d++){
			days.push(d);
		};
	
	};

	function displayYears(){
		// Output years as options in select tag
		for(let year in years){
			yearsOut.innerHTML += `<option>${years[year]}</option>`
		};
		// Set attr for leap years
		let yearsList = yearsOut.children;
		for(let i = 4; i < yearsList.length; i = i+4){
			yearsList[i].setAttribute("leap-year", "true");
		};
		// Set year 2000 as default
		yearsList[100].setAttribute("selected", "selected");
	}


	function displayMonths(){
		// reset
		monthsOut.innerHTML = '';
		// Output months
		for(let mon in months){
			monthsOut.innerHTML += `<option value="${(Number(mon)+1)}">${months[mon]}</option>`
		};
		// Set attr for months which has 30 days
		let monthsList = monthsOut.children
		monthsList[3].setAttribute("has30days", "true");
		monthsList[5].setAttribute("has30days", "true");
		monthsList[8].setAttribute("has30days", "true");
		monthsList[10].setAttribute("has30days", "true");
	}

	function displayDays(){
		// clear days output
		daysOut.innerHTML = '';
		// output days
		for(let day in days){
			daysOut.innerHTML += `<option>${days[day]}</option>`;
		}

	};


	function checkDaysInMonth(){
		//checking how many days to output in selected month
		let selectedYear = yearsOut.options[yearsOut.selectedIndex];
		let selectedMonth = monthsOut.options[monthsOut.selectedIndex];
		let selectedFeb = monthsOut.value;

		switch(true){
			case selectedMonth.hasAttribute('has30days'):
				monthLength = 30
				daysCount(30)
				break;
			case selectedYear.hasAttribute('leap-year') && selectedFeb == '2':
				monthLength = 29
				daysCount(29)
				break;
			case selectedFeb == '2':
				monthLength = 28
				daysCount(28)
				break;
			default:
				monthLength = 31
				daysCount(31);
		};

		displayDays();
	};


	// -------------------------------------------------------------
	//           Language change
	// -------------------------------------------------------------
	const langContainer = document.querySelector('.lang-select'),
		langsToSelect = document.querySelector('.lang-select__items'),
		engBtn = document.querySelector('.eng-btn'),
		uaBtn = document.querySelector('.ua-btn'),
		ruBtn = document.querySelector('.ru-btn'),
		langIcon = document.querySelector('.selected-lang-icon');

	let selectedLang = '';
	let iconPath = '';

	function displayLangIcon() {
		langIcon.innerHTML = `<img src="${iconPath}" alt="#">`;
	};

	function showIcon() {
		langIcon.style.display = "inline-block";
	};
	function hideIcon() {
		langIcon.style.display = "none";
	};

	function showLangs() {
		langContainer.style.transform = 'translateX(0)';
		langContainer.style.zIndex = '100';
	};
	function hideLangs() {
		langContainer.style.transform = 'translateX(-100%)';
		langContainer.style.zIndex = '-1';
	};

	const mainScreen = {
		header: document.querySelector('#main-header'),
		yearLabel: document.querySelector('#year-label'),
		monthLabel: document.querySelector('#month-label'),
		dayLabel: document.querySelector('#day-label'),
		button: document.querySelector('#start-button')
	};

	const mainEng = {
		header: document.querySelector('.main-header-en').innerHTML,
		yearLabel: document.querySelector('.year-en').innerHTML,
		monthLabel: document.querySelector('.month-en').innerHTML,
		dayLabel: document.querySelector('.day-en').innerHTML,
		button: document.querySelector('.button-en').innerHTML
	};

	const mainUkr = {
		header: document.querySelector('.main-header-ua').innerHTML,
		yearLabel: document.querySelector('.year-ua').innerHTML,
		monthLabel: document.querySelector('.month-ua').innerHTML,
		dayLabel: document.querySelector('.day-ua').innerHTML,
		button: document.querySelector('.button-ua').innerHTML
	};

	const mainRus = {
		header: document.querySelector('.main-header-ru').innerHTML,
		yearLabel: document.querySelector('.year-ru').innerHTML,
		monthLabel: document.querySelector('.month-ru').innerHTML,
		dayLabel: document.querySelector('.day-ru').innerHTML,
		button: document.querySelector('.button-ru').innerHTML
	};

	const resultLang = {
		pastEng: document.querySelector('.out-past-eng').innerHTML,
		errorEng: document.querySelector('.out-error-eng').innerHTML,
		pastUkr: document.querySelector('.out-past-ua').innerHTML,
		errorUkr: document.querySelector('.out-error-ua').innerHTML,
		pastRus: document.querySelector('.out-past-ru').innerHTML,
		errorRus: document.querySelector('.out-error-ru').innerHTML,
	};


	let resultPast = '';
	let resultError = '';


	function translateMain() {
		const mainValues = Object.values(mainScreen);
		const engValues = Object.values(mainEng);
		const ukrValues = Object.values(mainUkr);
		const rusValues = Object.values(mainRus);

		switch(true){
			case selectedLang == 'EN':
				for(let i = 0; i < mainValues.length; i++){
					mainValues[i].innerHTML = engValues[i]
				};
				months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
				displayMonths();

				resultPast = resultLang.pastEng;
				resultError = resultLang.errorEng;
				break;
			case selectedLang == 'UA':
				for(let i = 0; i < mainValues.length; i++){
					mainValues[i].innerHTML = ukrValues[i]
				};
				months = ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип","Сер", "Вер", "Жов", "Лис", "Гру"];
				displayMonths();

				resultPast = resultLang.pastUkr;
				resultError = resultLang.errorUkr;
				break;
			case selectedLang == 'RU':
				for(let i = 0; i < mainValues.length; i++){
					mainValues[i].innerHTML = rusValues[i]
				};
				months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл","Апр", "Сен", "Окт", "Ноя", "Дек"];
				displayMonths();

				resultPast = resultLang.pastRus;
				resultError = resultLang.errorRus;
				break;
		}
	}







// ---------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
	// Show languages select on language icon click
	langIcon.addEventListener('click', showLangs)

	// Language select buttons
	engBtn.addEventListener('click', ()=> {
		selectedLang = 'EN';
		iconPath = 'images/dist/free-icon-united-kingdom.svg';
		hideLangs();
		displayLangIcon();
		translateMain();
	})

	uaBtn.addEventListener('click', ()=> {
		selectedLang = 'UA';
		iconPath = 'images/dist/free-icon-ukraine.svg';
		hideLangs();
		displayLangIcon();
		translateMain();
	})

	ruBtn.addEventListener('click', ()=> {
		selectedLang = 'RU';
		iconPath = 'images/dist/free-icon-russia.svg';
		hideLangs();
		displayLangIcon();
		translateMain();
	})


	// Display inputs
	yearsCount();
	daysCount();
	displayYears();
	displayMonths();
	displayDays();

	// On change month or year check how many days to display
	yearsOut.addEventListener('change', (e)=>{
		checkDaysInMonth();
	});

	monthsOut.addEventListener('change', (e)=>{
		checkDaysInMonth();
	});


	// Show Hide Containers
	function switchContainer(hideCont, showCont){
		showCont.classList.remove("show-animation")
		showCont.style.opacity = "1"
		hideCont.classList.add("hide-animation")
		setTimeout(()=> {
			hideCont.style.opacity = "0"
			hideCont.style.display = "none";
			hideCont.classList.remove("hide-animation");
			showCont.style.display = "flex";
			showCont.classList.add("show-animation")
		}, 500)
	}

	// Start button   ------------------------------------------
	let strartBtn = document.querySelector('.start-btn');

	strartBtn.addEventListener('click', ()=>{
		hideIcon();

		const second = 1000,
		minute = second * 60,
		hour = minute * 60, 
		day = hour * 24,
		year = day * 365.2425;

		// current date
		const curDate = new Date(),			 
			curMonth = curDate.getMonth()+1, //number of month
			curDay = curDate.getDate(),      //number of day in month
			curYear = curDate.getFullYear(),
			//user input date
			inputDay = daysOut.value,
			inputMonth = monthsOut.value,
			inputYear = yearsOut.value,
			inputDate = `${inputMonth},${inputDay},${inputYear}`, 
			startDate = new Date(inputDate);

		
		// Time between two dates in miliseconds
		const timeDiff = (curDate - startDate);


		// Calculating months remainder from full year
		function diffMonths(cur, inp){
			if( inp > cur ){ 
				return (cur-inp)+12
			}
			return cur - inp
		};

		let fullMonths = diffMonths(curMonth, inputMonth);
		
		if( inputDay > curDay){
			fullMonths -= 1
		};
	
		if(fullMonths < 0){
			fullMonths += 12
		};



		// Calculating days remainder from full month
		function diffDays(cur, inp){
			if(inp > cur){
				return monthLength - inp + cur
			}
			return cur - inp
		};
		let fullDays = diffDays(curDay, inputDay);



		// Days to next birthday
		let bDay = '';
		
		const nextBday = ()=>{

			switch(true){
				case (curMonth > inputMonth) || ((curMonth == inputMonth) && (curDay > inputDay)):
					bDay = new Date(`${inputMonth}, ${inputDay}, ${curYear + 1}`);
				break;
				case (curMonth < inputMonth) || ((curMonth == inputMonth) && (curDay < inputDay)):
					bDay = new Date(`${inputMonth}, ${inputDay}, ${curYear}`);
				break;
				case (curMonth == inputMonth) && (curDay == inputDay):
					bDay = 0
				break;
			};
			
		}
		nextBday()

		let daysToBday = Math.floor((bDay - curDate)/day) + 1


		// Years, Days, Hours, Seconds from input date to today
		const fullYears = Math.floor(timeDiff/year);
		const daysDiff = Math.floor(timeDiff/day);
		const hoursDiff = Math.floor(timeDiff/hour);
		const secondsDiff = Math.floor(timeDiff/second);



		// Show output container
		switchContainer(inputsContainer, outContainer)
	
		// Animated counter
		function animateValue(id, start, end, duration) {
			if (start === end) return;
			let range = end - start;
			let current = start;
			let increment = end > start? 1 : -1;
			let stepTime = Math.abs(Math.floor(duration / range));
			let obj = document.getElementById(id);
			let timer = setInterval(function() {
				current += increment;
				obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}



		function displayResult(){
			if(timeDiff >= 0){
				// Display result
				outContainer.innerHTML = resultPast;

				// Output animation
				animateValue('full-years', 0, fullYears, 1000);
				animateValue('full-months', 0, fullMonths, 1000);
				animateValue('full-days', 0, fullDays, 1000);
				animateValue('days-to-bday', daysToBday-100, daysToBday, 1000);
				animateValue('days-diff', daysDiff-100, daysDiff, 1000);
				animateValue('hours-diff', hoursDiff-100, hoursDiff, 1000);
				animateValue('seconds-diff', secondsDiff-100, secondsDiff, 1000);

				// Display happy birthday
				if(bDay == 0){
					document.querySelector('.bday-wrapper').style.display = 'none'
					document.querySelector('.happy-bday').style.display = 'inline-block'
				};

			}else{
				outContainer.innerHTML = resultError;
			}

		}
		displayResult();
		
		let returnBtn = document.querySelectorAll('.return-btn');

		returnBtn.forEach((el)=>{
			el.addEventListener('click', ()=>{
					switchContainer(outContainer, inputsContainer)
					showIcon();
				})	
			});
	
		

	});


	// About section hide
	const aboutSection = document.querySelector('.about');

	document.querySelector('.close').addEventListener('click', ()=> {
		aboutSection.style.transform = "translateX(100%)"
	});

	document.querySelector('.about-link').addEventListener('click', ()=> {
		aboutSection.style.transform = "translateX(0)"
	})

});
