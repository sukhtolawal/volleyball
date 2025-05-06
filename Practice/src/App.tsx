
import Card from './components/Card'


const App = () => {

 

  
  return (
    // <Card>
    //   <div> hello world</div>

    //   <div>this is second children</div>
    //   <Conditional isValid = {false}/>
    <div className='w-screen h-screen flex flex-col gap-1 justify-center items-center'>
      <Card team= "A" />
      <Card team= "B"/>
      </div>

    // <Reducer/>
    // <Form/>
  // <MyProvider>
  //   <ContextCounter />
  // </MyProvider>

  
    
  )
}

export default App