import { useStore } from "react-redux";
import Bag from "../../organism/object/Bag"
import Team from "../../organism/object/Team"
import { playerType } from "../../resource/reduxStore/reducers/Player";

function HomePage() {
  const store = useStore();
  const state: {player?: playerType} = store.getState();
  return (
    <>
      <div>         
        <h1>Pokemon Team</h1>
        {`total pokemon ${state.player?.team.length}`}
        <Team/>
      </div>
      <div>
        <h1>Bag Team</h1>
        <Bag/>  
      </div>
    </>
  )
}

export default HomePage