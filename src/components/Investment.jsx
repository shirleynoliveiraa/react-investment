import { getCalculatedReports } from '../services/ReportsService';
import Report from './Report';

export default function Investment({ children: investment = null }) {
  if (!investment) {
    return <div>Impossível renderizar o investimento</div>;
  }

  const calculatedReport = getCalculatedReports(investment.id);

  return (
    <div className="border p-2 m-2 ">
      <h2 className="text-center font-semibold">{investment.description}</h2>
      <h3 className="p-1 text-center fond-semibold text-sm">
        Rendimento total: R$ {calculatedReport.rendimento} (
        {calculatedReport.rate}%)
      </h3>
      <div className="top-10">
        {calculatedReport.reports.map(report => {
          return <Report key={report.id}>{report}</Report>;
        })}
      </div>
    </div>
  );
}
