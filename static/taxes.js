let salary = 0;
let country = "sg";

import { sgTaxes, ukTaxes, ieTaxes } from "./taxRates.js";

function calculateTax(income)
{
    if (country === "sg")
    {
		let sgTax = sgTaxes(income).toFixed(0);
		let sgTakeHome = income - sgTax;
        document.querySelector("#taxes").innerHTML = sgTax;
		document.querySelector("#yearTakeHome").innerHTML = sgTakeHome;
		document.querySelector("#monthTakeHome").innerHTML = (sgTakeHome/12).toFixed(0);
    }
    if (country === "uk")
    {
    	let ukTax = ukTaxes(income)
		let ukTakeHome = income - ukTax[0].toFixed(0);
        document.querySelector("#taxes").innerHTML = ukTax[0].toFixed(0) + "</br>Income Tax: GBP " + ukTax[1].toFixed(0) + "</br>National Insurance: GBP " + ukTax[2].toFixed(0);
		document.querySelector("#yearTakeHome").innerHTML = ukTakeHome;
		document.querySelector("#monthTakeHome").innerHTML = (ukTakeHome/12).toFixed(0);
	}
	if (country === "ie")
	{
		let ieTax = ieTaxes(income);
		let ieTakeHome = income - ieTax[0].toFixed(0);
		document.querySelector("#taxes").innerHTML = ieTax[0].toFixed(0) + "</br>Income Tax: EUR " + ieTax[1].toFixed(0) + "</br>Social Insurance (PRSI): EUR " + ieTax[2].toFixed(0) + "</br>Universal Social Charge (USC): EUR " + ieTax[3].toFixed(0);
		document.querySelector("#yearTakeHome").innerHTML = ieTakeHome;
		document.querySelector("#monthTakeHome").innerHTML = (ieTakeHome/12).toFixed(0);
	}
}

function changeCur(cur)
{
	var curList = document.querySelectorAll(".currency");
	var i;
	for (i = 0; i < curList.length; i++) {
		curList[i].innerHTML = cur;
	}
}

document.querySelector('#country').onchange = function()
{
    if (this.value === "uk")
    {
		changeCur("GBP");
        document.querySelector("#disclaimer").innerHTML = "This assumes you 1) are not a <a href=\"https://www.gov.uk/scottish-income-tax\">resident of Scotland</a> and 2) are required to contribute to <a href=\"https://www.gov.uk/national-insurance\">National Insurance</a>.";
        country = "uk";
    }
    if (this.value === "sg")
    {
        changeCur("SGD");
        document.querySelector("#disclaimer").innerHTML = "Remember to deduct your <a href=/cpf>CPF contributions</a> from your income!";
        country = "sg";
    }
	if (this.value === "ie")
	{
		changeCur("EUR");
		document.querySelector("#disclaimer").innerHTML = "This assume you 1) are not self employed and 2) are paying standard <a href=\"https://www.citizensinformation.ie/en/money_and_tax/tax/income_tax/universal_social_charge.html\">Universal Social Charge</a>.";
		country = "ie";
	}
	calculateTax(salary);
};

document.querySelector('#monthly').onchange = function()
{
    document.querySelector("#annual").value = (this.value * 12);
    salary = this.value * 12;
    calculateTax(salary);
};

document.querySelector('#annual').onchange = function()
{
    document.querySelector("#monthly").value = (this.value / 12).toFixed(0);
    salary = this.value;
    calculateTax(salary);
};