
function calculateTax(income) {
    let tax = 0;

    if (income <= 24000) {
        tax = income * 0.1; 
    } else if (income <= 40000) {
        tax = 2400 + (income - 24000) * 0.15;
    } else if (income <= 60000) {
        tax = 4800 + (income - 40000) * 0.2; 
    } else {
        tax = 8800 + (income - 60000) * 0.3; 
    }
    return tax;
}


function calculateNHIF(income) {
    let nhifDeduction = 0;
    if (income <= 5999) {
        nhifDeduction = 150;
    } else if (income <= 7999) {
        nhifDeduction = 300;
    } else if (income <= 11999) {
        nhifDeduction = 400;
    } else if (income <= 14999) {
        nhifDeduction = 500;
    } else if (income <= 19999) {
        nhifDeduction = 600;
    } else if (income <= 29999) {
        nhifDeduction = 750;
    } else if (income <= 39999) {
        nhifDeduction = 850;
    } else if (income <= 49999) {
        nhifDeduction = 950;
    } else {
        nhifDeduction = 1000; 
    return nhifDeduction;
}
}

function calculateNSSF(income) {
    return income * 0.06; 


function calculateNetSalary(basicSalary, benefits) {
    const totalIncome = basicSalary + benefits;

   
    const tax = calculateTax(totalIncome);
    const nhifDeduction = calculateNHIF(totalIncome);
    const nssfDeduction = calculateNSSF(totalIncome);

    
    const grossSalary = totalIncome;

    
    const totalDeductions = tax + nhifDeduction + nssfDeduction;

   
    const netSalary = grossSalary - totalDeductions;

   
    console.log(`Basic Salary: KES ${basicSalary}`);
    console.log(`Benefits: KES ${benefits}`);
    console.log(`Gross Salary: KES ${grossSalary}`);
    console.log(`KRA PAYE Tax: KES ${tax}`);
    console.log(`NHIF Deduction: KES ${nhifDeduction}`);
    console.log(`NSSF Deduction: KES ${nssfDeduction}`);
    console.log(`Net Salary: KES ${netSalary}`);
}
}