let salaryCalc = (salary, diffPerc) => {
  let trimmedSalary = parseInt(salary.replace(/,/g, ''), 10);
  let actualDiff = (100 - parseInt(diffPerc, 10)) / 100;
  return (trimmedSalary * actualDiff).toFixed(0);
};

export default salaryCalc;
