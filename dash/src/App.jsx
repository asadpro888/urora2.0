import PrimarySearchAppBar from './AppBar';
import NavBar from './NavBar.jsx';
import StackBars from './BarChart';
import DifferentLength from './LineChart'
import PieColor from './PieChart';
import PieActiveArc from './Pie'
import './App.css'

function App() {
  

  return (
    <>
      <PrimarySearchAppBar />
      <div className='uz'>
        <div><NavBar /></div>
<div className='wrapper'>
        <div className='wap'>
        <div className='flex'>
        <StackBars />
        <DifferentLength className='line' />
        </div>
        <div className='display'>
        <PieColor />
          <PieActiveArc/>
        </div>
        </div>
        
      </div>
      </div>
      
      
      
    </>
  )
}

export default App