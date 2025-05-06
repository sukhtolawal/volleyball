
import useStore from '../Store'

const Card = ({ team }: { team: string }) => {
  const { score, servingTeam, setServingTeam, setScore, resetScore } = useStore()

  const handleClick = () => {
    
    if (team === servingTeam){
      setScore(team)
    }
    setServingTeam(team)
  }

  const isServing = team === servingTeam
  const bgColor = isServing ? 'bg-green-600' : 'bg-red-600'
  
  const sc = team=== "A"? score.A : score.B

 

  return (
    <>
    <div
      onClick={handleClick}
      className={`flex flex-col justify-center items-center w-[50%] h-[50%] ${bgColor} text-white font-semibold relative rounded-lg transition-all duration-300`}
    >
      <span className='text-7xl select-none'>{sc}</span>
      
      
    </div>
    <div>
    <button className='bg-blue-400 p-3 rounded-lg text-white shadow-2xl select-none'  onClick={()=>resetScore(team)}>reset</button>
    </div>
    </>
  )
}

export default Card
