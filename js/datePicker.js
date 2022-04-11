{/* <form>
                <span>
                    <label for="day">Day:</label>
                    <select name="day" id="day"></select>
                </span>
                <span>
                    <label for="month">Month:</label>
                    <select name="month" id="month"></select>
                </span>
                <span>
                    <label for="year">Year:</label>
                    <select name="year" id="year">Year:</select>
                </span>
            </form> */}

//Reference dropdown
const defineYear = document.getElementById("year");
const defineMonth = document.getElementById("month");
const defineDay = document.getElementById("day");

(function makeYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Calculate year difference from now to 1995
    let to1995 = year - 1995
    for(let i = 0; i <= to1995; i++){
        const option = document.createElement('option');
        option.textContent = year - i;
        defineYear.appendChild(option);
    }
})();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

(function makeMonths(){
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.textContent = months[i];
        defineMonth.appendChild(option);
    }
    defineMonth.value = 'January'
})();





/* let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if(month === 'January' || month === 'March' || 
    month === 'May' || month === 'July' || month === 'August' 
    || month === 'October' || month === 'December') {
        dayNum = 31;
    } else if(month === 'April' || month === 'June' 
    || month === 'September' || month === 'November') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
} */