import { reports } from '../data/reports';

function getCalculatedReports(id) {
  // prettier-ignore
  const investmentReports = 
    reports.filter(({investmentId}) => investmentId.includes(id));

  const sorteredReport = investmentReports.sort((a, b) => a.month - b.month);

  let result = {
    reports: [],
    rendimento: 0,
    rate: 0,
  };

  let value = sorteredReport[0].value;
  result.reports = sorteredReport.map(report => {
    const rate = calculateRate(value, report.value);
    value = report.value;
    return { ...report, rate };
  });
  result.rendimento = Math.round((value - sorteredReport[0].value) * 100) / 100;
  result.rate = calculateRate(sorteredReport[0].value, value);

  return result;
}

function calculateRate(startValue, endValue) {
  const balance = endValue - startValue;
  let rate = (100 * balance) / startValue;
  rate = Math.round(rate * 100) / 100;
  return rate;
}

export { getCalculatedReports, calculateRate };
