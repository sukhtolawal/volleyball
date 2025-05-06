
import Card from './components/Card'
import { Routes, Route } from 'react-router-dom'


const App = () => {

 

  
  return (
    // <Card>
    //   <div> hello world</div>

    //   <div>this is second children</div>
    //   <Conditional isValid = {false}/>
    <Routes>
    <Route path="/" element={<div className='w-screen h-screen flex flex-col gap-1 justify-center items-center'>
      <Card team= "A" />
      <Card team= "B"/>
      </div>} />
   
  </Routes>
    

    // <Reducer/>
    // <Form/>
  // <MyProvider>
  //   <ContextCounter />
  // </MyProvider>

  
    
  )
}

export default App