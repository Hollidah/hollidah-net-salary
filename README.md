
            Net Salary Calculator 

This program calculates an individual’s Net Salary by taking into account the basic salary and benefits provided. It calculates the KRA PAYE Tax, NHIF Deductions, NSSF Deductions, gross salary, and net salary. The program follows the KRA, NHIF, and NSSF values as defined by the current tax laws in Kenya.

        Features
1. Basic Salary and Benefits are taken as inputs.
2. The program calculates the KRA PAYE Tax based on income brackets.
3. It calculates NHIF Deduction based on the salary.
4. It computes NSSF Deduction (usually 6% of the total income).
5. It calculates gross salary (sum of basic salary and benefits).
6. It calculates net salary (gross salary minus the total deductions).
7. Outputs a clear breakdown of salary details including KRA PAYE Tax,     NHIF Deduction, NSSF Deduction, and Net Salary.

            Code used;
 // Function to calculate KRA PAYE Tax based on income
function calculateTax(income) {
    let tax = 0;

    if (income <= 24000) {
        tax = income * 0.1; // 10% tax for income <= 24,000
    } else if (income <= 40000) {
        tax = 2400 + (income - 24000) * 0.15; // 15% tax for income between 24,001 - 40,000
    } else if (income <= 60000) {
        tax = 4800 + (income - 40000) * 0.2; // 20% tax for income between 40,001 - 60,000
    } else {
        tax = 8800 + (income - 60000) * 0.3; // 30% tax for income > 60,000
    }
    return tax;
}

// Function to calculate NHIF Deduction based on salary
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
        nhifDeduction = 1000; // For salary above 50,000
    }
    return nhifDeduction;
}

// Function to calculate NSSF Deduction
function calculateNSSF(income) {
    return income * 0.06; // NSSF is typically 6% of the income
}

// Function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    const totalIncome = basicSalary + benefits;

    // Call the functions to calculate deductions
    const tax = calculateTax(totalIncome);
    const nhifDeduction = calculateNHIF(totalIncome);
    const nssfDeduction = calculateNSSF(totalIncome);

    // Calculate the gross salary (basic salary + benefits)
    const grossSalary = totalIncome;

    // Calculate total deductions (tax + NHIF + NSSF)
    const totalDeductions = tax + nhifDeduction + nssfDeduction;

    // Calculate net salary
    const netSalary = grossSalary - totalDeductions;

    // Output results
    console.log(`Basic Salary: KES ${basicSalary}`);
    console.log(`Benefits: KES ${benefits}`);
    console.log(`Gross Salary: KES ${grossSalary}`);
    console.log(`KRA PAYE Tax: KES ${tax}`);
    console.log(`NHIF Deduction: KES ${nhifDeduction}`);
    console.log(`NSSF Deduction: KES ${nssfDeduction}`);
    console.log(`Net Salary: KES ${netSalary}`);
}
            code Explanation;
calculateTax(income): This function calculates the KRA PAYE tax based on the provided income. The tax is calculated in steps based on different income brackets.

calculateNHIF(income): This function calculates the NHIF deduction based on the salary. The deduction varies based on salary ranges.

calculateNSSF(income): This function calculates the NSSF deduction, which is a fixed percentage (6%) of the total income.

calculateNetSalary(basicSalary, benefits): This function takes the basic salary and benefits as input, calculates the gross salary, calls the tax, NHIF, and NSSF functions, and finally calculates and prints the net salary.