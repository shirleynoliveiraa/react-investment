import Header from "../components/Header";
import { allInvestments } from '../data/investments';
import Investments from "../components/Investments";
import Investment from '../components/Investment';
import Main from "../components/Main";

export default function InvestmentsPage() {
  //console.log('ou');

  return (
    <>
    <Header />

    <Main>
    <Investments>
          {allInvestments.map(investment => {
            return <Investment key={investment.id}>{investment}</Investment>;
          })}
        </Investments>
    </Main>
    </>
  )
}