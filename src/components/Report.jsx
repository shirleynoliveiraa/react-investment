export default function Report({ children: report = null }) {
  const valor = Math.round(report.value * 100) / 100;
  const taxa = Math.round(report.rate * 100) / 100;

  let mes = '';
  switch (report.month) {
    case 1:
      mes = 'Jan';
      break;
    case 2:
      mes = 'Fev';
      break;
    case 3:
      mes = 'Mar';
      break;
    case 4:
      mes = 'Abr';
      break;
    case 5:
      mes = 'Mai';
      break;
    case 6:
      mes = 'Jun';
      break;
    case 7:
      mes = 'Jul';
      break;
    case 8:
      mes = 'Ago';
      break;
    case 9:
      mes = 'Set';
      break;
    case 10:
      mes = 'Out';
      break;
    case 11:
      mes = 'Nov';
      break;
    case 12:
      mes = 'Dez';
      break;
    default:
      mes = '';
  }
  mes += '/' + report.year;

  return (
    <div className="p2 flex">
      <div className="text-sm flex-1">{mes}</div>&nbsp;
      <div className="text-sm justify-self-start flex-1">{valor}</div>&nbsp;
      <div className="text-sm justify-end">{taxa}</div>
    </div>
  );
}
