export function sgTaxes(income)
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

export function ukTaxes(income)
{
    let itax;
    let ni;
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

export function ieTaxes(income)
{
    let itax;
    let prsi;
    let usc;
    if (income < 35300)
    {
        itax = income * 0.2;
    } else {
        itax = 7060 + (income - 35300)*0.4;
    }
    itax = Math.max(0, (itax - 1650));

    if (income < 13001)
    {
        prsi = 0;
    }
    else if (income <= 20687)
    {
        prsi = 60.06 + (income - 12012)*0.02;
    }
    else if (income <= 70044)
    {
        prsi = 233.56 + (income - 20687)*0.045;
    }
    else
    {
        prsi = 2454.63 + (income - 70044)*0.08;
    }
    var weekly = (income/365*7).toFixed(3);
    if (weekly <= 352)
    {
        usc = 0;
    }
    else if (income <= 424)
    {
        usc = income * 0.04 - (12 - (weekly-352)/6)/7*365;
    }
    else
    {
        usc = income * 0.04;
    }
    let tax = itax + prsi + usc;
    return [tax, itax, prsi, usc];
}