import logo from './logo.svg';
import './App.css';
import Active from './Components/Active';
import Submissions from './Components/Submissions';
import TotalActive from './Components/TotalActive';
import TotalSub from './Components/TotalSub';
import {Flex} from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <Flex gap='10px'>
        <TotalActive/>
        <TotalSub/>
      </Flex>
      <Active/>
      <Submissions/>
    </div>
  );
}

export default App;
