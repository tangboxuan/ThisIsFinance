export function fedTaxes(income)
{
    let ftax;
    if (income <= 9875 )
    {
        ftax = income * 0.1;
    }
    else if (income <= 40125)
    {
        ftax = 987.5 + (income - 9875)*0.12;
    }
    else if (income <= 85525)
    {
        ftax = 4617.5 + (income - 40125)*0.22;
    }
    else if (income <= 163300)
    {
        ftax = 14605.5 + (income - 85525)*0.24;
    }
    else if (income <= 207350)
    {
        ftax = 33271.5 + (income - 163300)*0.32;
    }
    else if (income <= 518400)
    {
        ftax = 47367.5 + (income - 207350)*0.35;
    }
    else
    {
        ftax = 156235 + (income - 518400)*0.37;
    }

    let ss = Math.min(income, 142800)*0.062;
    let medi;
    if (income < 200000)
    {
        medi = income * 0.0145;
    }
    else
    {
        medi = 2900 + (income - 200000)*0.009;
    }
    return [ftax, ss, medi];
}

export function caTaxes(income)
{
    let tax;
    if (income < 8932)
    {
        tax = income * 0.01;
    }
    else if (income < 21175)
    {
        tax = 89.32 + (income - 8932)*0.02;
    }
    else if (income < 33421)
    {
        tax = 334.18 + (income - 21175)*0.04;
    }
    else if (income < 46394)
    {
        tax = 824.02 + (income - 33421)*0.06;
    }
    else if (income < 58634)
    {
        tax = 1602.4 + (income - 46394)*0.08;
    }
    else if (income < 299508)
    {
        tax = 2581.6 + (income - 58634)*0.093;
    }
    else if (income < 359407)
    {
        tax = 24982.88 + (income - 299508)*0.103;
    }
    else if (income < 599012)
    {
        tax = 31152.48 + (income - 359407)*0.113;
    }
    else
    {
        tax = 58227.85 + (income - 599012)*0.123;
    }
    return tax;
}

export function nyTaxes(income)
{
    let nyTax;
    if (income < 8500)
    {
        nyTax = income * 0.04;
    }
    else if (income < 11700)
    {
        nyTax = 340 + (income - 8500)*0.045;
    }
    else if (income < 13900)
    {
        nyTax = 484 + (income - 11700)*0.0525;
    }
    else if (income < 21400)
    {
        nyTax = 600 + (income - 13900)*0.0590;
    }
    else if (income < 80650)
    {
        nyTax = 1042 + (income - 21400)*0.0609;
    }
    else if (income < 215400)
    {
        nyTax = 4650 + (income - 80650)*0.0641;
    }
    else if (income < 1077550)
    {
        nyTax = 13288 + (income - 215400)*0.0685;
    }
    else
    {
        nyTax = 72345 + (income - 1077550)*0.0882;
    }

    let nycTax;
    if (income < 12000)
    {
        nycTax = income*0.03078;
    }
    else if (income < 25000)
    {
        nycTax = 369.36 + (income - 12000)*0.03762;
    }
    else if (income < 50000)
    {
        nycTax = 858.42 + (income - 25000)*0.03819;
    }
    else
    {
        nycTax = 1813.17 + (income - 50000)*0.03876;
    }
    return [nyTax, nycTax];
}