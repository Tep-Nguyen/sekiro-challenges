import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {
  const [runData, setRunData] = useState({
    text: '',
    link: '',
    type: 'Speedrun',
    burdens: '1',
    ng: 'Reflection',
  })
  
  const {text, link, type, burdens, ng} = runData

  const dispatch = useDispatch()

  // const [disable, setDisable] = useState(true);

  // function disableGauntlet() {
  //   if (type === 'Gauntlet of Strength') {
  //     setDisable(true)
  //   } else {
  //     setDisable(false)
  //   }
  // }




  const onChange = (e) => {
    setRunData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    console.log(type)
    e.preventDefault()
    
    
    const vidData = {
      text,
      link,
      type,
      burdens,
      ng,
    }

    dispatch(createGoal(vidData))
    setRunData({
      text: '',
      link: '',
      type: 'Speedrun',
      burdens: '1',
      ng: 'Reflection',
    })
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Challenge Info</label>
          <input
            type='text'
            className='form-control'
            name='text'
            id='text'
            placeholder='Challenge Title'
            value={text}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            name='link'
            id='link'
            placeholder="Youtube Embed ID (e.g. ScMzIvxBSi4 from 'youtube.com/watch?v=ScMzIvxBSi4')"
            value={link}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <select type='text' name="type" id="type" className='form-control' value={type} onChange={onChange}>
            <option value='Speedrun'>Speedrun</option>
            <option value='Full Game Hitless'>Full Game Hitless</option>
            <option value='Miniboss Challenge'>Miniboss Challenge</option>
            <option value='Boss Challenge'>Boss Challenge</option>
            <option value='Gauntlet of Strength'>Gauntlet of Strength</option>
            <option value='Other'>Other</option>
         </select>
        </div>
        <div className='form-group'>
          <select type='text' name="burdens" id="burdens" className='form-control' value={burdens}
          onChange={onChange}>
            <option value='1'>With Kuro's Charm, No Bell Demon</option>
            <option value='2'>With Kuro's Charm, Demon Bell</option>
            <option value='3'>Charmless, No Bell Demon</option>
            <option value='4'>Charmless, Bell Demon</option>
         </select>
         </div>
         <div className='form-group'>
          <select type='text' name="ng" id="ng" className='form-control' value={ng}
          onChange={onChange}>
            <option value='Reflection'>Reflection</option>
            <option value='NG'>NG</option>
            <option value='NG+1'>NG+1</option>
            <option value='NG+2'>NG+2</option>
            <option value='NG+3'>NG+3</option>
            <option value='NG+4'>NG+4</option>
            <option value='NG+5'>NG+5</option>
            <option value='NG+6'>NG+6</option>
            <option value='NG+7'>NG+7</option>
         </select>
         </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Challenge Video
          </button>
        </div>
      </form>
      
    </section>
    
  )
}

export default GoalForm
