import {useDispatch} from 'react-redux'
import {deleteGoal} from '../features/goals/goalSlice'
import YoutubeEmbed from "./YoutubeEmbed";
import demonbell from '../resources/demonbell.png'
import charmless from '../resources/charmless.png'


function GoalItem({goal}) {
  const dispatch = useDispatch()
  let burdenText
  console.log(goal.burdens)

  if (goal.burdens === '4') {
    burdenText = <div>
    <img src={demonbell} width={15} height={15} alt='[B]'/>
    <img src={charmless} width={15} height={15} alt='[C]'/>
    {goal.ng}
     </div>
  } else if (goal.burdens === '3'){
    burdenText = <div>
    <img src={charmless} width={15} height={15} alt='[C]'/>
    {goal.ng}
     </div>
  } else if (goal.burdens === '2'){
    burdenText = <div>
    <img src={demonbell} width={15} height={15} alt='[B]'/>
    {goal.ng}
     </div>
  } else {
    burdenText = <div>
    {goal.ng}
     </div>
  } 

   return (
     <div className='goal'>
       {burdenText}
       <div>{goal.type}</div>
       <h3>{goal.text}</h3>
       <div className="App">
       <YoutubeEmbed embedId={goal.link} />
        </div>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
          X
       </button>
     </div>
   )
}

export default GoalItem
