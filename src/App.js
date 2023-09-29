import logo from './logo.svg';
import './Assign/common.css';
import { Card, CardContent } from '@mui/material';
import { Colors } from './components/Colors';
import { Form } from './components/Form';
import { Landing } from './Nav/Landing';
import { HOme } from './components/HOme';
import { Assign20 } from './Assign/Assign20';
import { Home } from './Project10/Home';
import { Assign21 } from './Assign/Assign21';

function App() {
  return (
   <Card sx={{height:"100vh",padding:"100px 300px"}}>
    <CardContent>
    
        {/* <HOme/> */}
        {/* <Home/> */}
        <Assign21/>
        {/* <Assign20/> */}
      
    </CardContent>
   </Card>
  );
}

export default App;
