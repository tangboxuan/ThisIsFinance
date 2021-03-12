let salary = 0;
let type = "np";
let age = "35";

function checkNumber(key)
{
    var charCode = (key.which) ? key.which : key.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

document.querySelector('#type').onchange = function()
{
    type = this.value;
    calculateCPF(salary);
};

document.querySelector('#age').onchange = function()
{
    age = this.value;
    calculateCPF(salary);
};

document.querySelector('#monthly').onchange = function()
{
    document.querySelector("#annual").value = (this.value * 12);
    salary = this.value * 12;
    calculateCPF(salary);
};

document.querySelector('#annual').onchange = function()
{
    document.querySelector("#monthly").value = (this.value / 12).toFixed(0);
    salary = this.value;
    calculateCPF(salary);
};

function calculateCPF(income)
{
    let cpf = 0;
    let OA = 0;
    let MA = 0;
    let SA = 0;
    let ratio = 0;

    if (age === "35")
    {
        cpf = income * 0.37;
        OA = income * 0.23;
        MA = income * 0.06;
        SA = income * 0.08;
        ratio = 17 / 37;
    }
    else if (age === "45")
    {
        cpf = income * 0.37;
        OA = income * 0.21;
        MA = income * 0.07;
        SA = income * 0.09;
        ratio = 17 / 37;
    }
    else if (age === "50")
    {
        cpf = income * 0.37;
        OA = income * 0.19;
        MA = income * 0.08;
        SA = income * 0.10;
        ratio = 17 / 37;
    }
    else if (age === "55")
    {
        cpf = income * 0.37;
        OA = income * 0.15;
        MA = income * 0.115;
        SA = income * 0.105;
        ratio = 17 / 37;
    }
    else if (age === "60")
    {
        cpf = income * 0.26;
        OA = income * 0.12;
        MA = income * 0.035;
        SA = income * 0.105;
        ratio = 13 / 26;
    }
    else if (age === "65")
    {
        cpf = income * 0.165;
        OA = income * 0.035;
        MA = income * 0.025;
        SA = income * 0.0105;
        ratio = 9 / 16.5;
    }
    else if (age === "70")
    {
        cpf = income * 0.125;
        OA = income * 0.01;
        MA = income * 0.01;
        SA = income * 0.105;
        ratio = 7.5 / 12.5;
    }

    if (type === "p")
    {
        if (age === "65")
        {
            cpf = income * 0.12375;
            OA = income * 0.03;
            MA = income * 0.01875;
            SA = income * 0.075;
        }
        cpf = cpf * (3/4);
        OA = OA * (3/4);
        SA = SA * (3/4);
        MA = MA * (3/4);
    }

    //Total

    document.querySelector("#OA_E").innerHTML = (OA * ratio).toFixed(2);
    document.querySelector("#OA_S").innerHTML = (OA * (1 - ratio)).toFixed(2);
    document.querySelector("#OA_T").innerHTML = OA;

    document.querySelector("#MA_E").innerHTML = (MA * ratio).toFixed(2);
    document.querySelector("#MA_S").innerHTML = (MA * (1 - ratio)).toFixed(2);
    document.querySelector("#MA_T").innerHTML = MA.toFixed(2);

    document.querySelector("#SA_E").innerHTML = (SA * ratio).toFixed(2);
    document.querySelector("#SA_S").innerHTML = (SA * (1 - ratio)).toFixed(2);
    document.querySelector("#SA_T").innerHTML = SA.toFixed(2);

    document.querySelector("#E_T").innerHTML = (cpf * ratio).toFixed(2);
    document.querySelector("#S_T").innerHTML = (cpf * (1 - ratio)).toFixed(2);
    document.querySelector("#Total").innerHTML = cpf.toFixed(2);

    //Monthly

    document.querySelector("#MOA_E").innerHTML = (OA * ratio / 12).toFixed(2);
    document.querySelector("#MOA_S").innerHTML = (OA * (1 - ratio) / 12).toFixed(2);
    document.querySelector("#MOA_T").innerHTML = (OA / 12).toFixed(2);

    document.querySelector("#MMA_E").innerHTML = (MA * ratio / 12).toFixed(2);
    document.querySelector("#MMA_S").innerHTML = (MA * (1 - ratio) / 12).toFixed(2);
    document.querySelector("#MMA_T").innerHTML = (MA / 12).toFixed(2);

    document.querySelector("#MSA_E").innerHTML = (SA * ratio / 12).toFixed(2);
    document.querySelector("#MSA_S").innerHTML = (SA * (1 - ratio) / 12).toFixed(2);
    document.querySelector("#MSA_T").innerHTML = (SA / 12).toFixed(2);

    document.querySelector("#ME_T").innerHTML = (cpf * ratio / 12).toFixed(2);
    document.querySelector("#MS_T").innerHTML = (cpf * (1 - ratio) / 12).toFixed(2);
    document.querySelector("#MTotal").innerHTML = (cpf / 12).toFixed(2);


}