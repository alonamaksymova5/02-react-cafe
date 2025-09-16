import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";

export default function App() {
  return (
    <div>
      <div className={css.app}></div>
      <CafeInfo />
      <VoteOptions />
    </div>
  );
}
