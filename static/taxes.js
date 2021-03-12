let salary = 0;
let country = "sg";

function sgTaxes(income)
{
    let tax = 0;
    if (income < 20000)
    {
		tax = 0;
    }
	else if (income < 30000)
	{
		tax = (income - 20000) * 0.02;
	}
	else if (income < 40000)
	{
		tax = 200 + (income - 30000) * 0.035;
	}
	else if (income < 80000)
	{
		tax = 550 + (income - 40000) * 0.07;
	}
	else if (income < 120000)
	{
		tax = 3350 + (income - 80000) * 0.115;
	}
	else if (income < 160000)
	{
		tax = 7950 + (income - 120000) * 0.15;
	}
	else if (income < 200000)
	{
		tax = 13950 + (income - 160000) * 0.18;
	}
	else if (income < 240000)
	{
		tax = 21150 + (income - 200000) * 0.19;
	}
	else if (income < 280000)
	{
		tax = 28750 + (income - 240000) * 0.195;
	}
	else if (income < 320000)
	{
		tax = 36550 + (income - 280000) * 0.20;
	}
	else
	{
		tax = 44550 + (income - 320000) * 0.22;
	}
	return tax
}

function ukTaxes(income)
{
    if (income < 12500)
    {
		itax = 0;
    }
	else if (income < 50000)
	{
		itax = (income - 12500) * 0.20;
	}
	else if (income < 100000)
	{
		itax = 7500 + (income - 50000) * 0.40;
	}
	else if (income < 125000)
	{
		itax = 27500 + (income - 100000) * 0.40 + (income - 100000)/2 * 0.20;
	}
	else if (income < 150000)
	{
		itax = 40000 + (income - 125000) * 0.40;
	}
	else
	{
		itax = 50000 + (income - 150000) * 0.45
	}
	if (income < 9500)
	{
		ni = 0
	}
	else if (income < 50000)
	{
		ni = (income - 9500) * 0.12;
	}
	else
	{
		ni = 4860 + (income - 50000) * 0.02;
	}
	let tax = itax + ni;
	return [tax, itax, ni];
}

function calculateTax(income)
{
    if (country === "sg")
    {
        document.querySelector("#taxes").innerHTML = sgTaxes(income).toFixed(0);
    }
    if (country === "uk")
    {
    	ukTax = ukTaxes(income)
        document.querySelector("#taxes").innerHTML = ukTax[0].toFixed(0) + "</br>Income Tax: GBP " + ukTax[1].toFixed(0) + "</br>National Insurance: GBP " + ukTax[2].toFixed(0);
    }
}

function checkNumber(key)
{
    var charCode = (key.which) ? key.which : key.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

document.querySelector('#country').onchange = function()
{
    if (this.value === "uk")
    {
        document.querySelector("#month_currency").innerHTML = "GBP";
        document.querySelector("#year_currency").innerHTML = "GBP";
        document.querySelector("#tax_currency").innerHTML = "GBP";
        document.querySelector("#disclaimer").innerHTML = "This assumes you 1) are not a <a href=\"https://www.gov.uk/scottish-income-tax\">resident of Scotland</a> and 2) are required to contribute to <a href=\"https://www.gov.uk/national-insurance\">National Insurance</a>.";
        country = "uk";
        calculateTax(salary);
    }
    if (this.value === "sg")
    {
        document.querySelector("#month_currency").innerHTML = "SGD";
        document.querySelector("#year_currency").innerHTML = "SGD";
        document.querySelector("#tax_currency").innerHTML = "SGD";
        document.querySelector("#disclaimer").innerHTML = "Remember to deduct your <a href=/cpf>CPF contributions</a> from your income!";
        country = "sg";
        calculateTax(salary);
    }
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