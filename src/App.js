import logo from './logo.svg';
import './App.css';
import { Card, CardContent } from '@mui/material';
import { Colors } from './components/Colors';
import { Form } from './components/Form';
import { Landing } from './Nav/Landing';

function App() {
  return (
   <Card>
    <CardContent>
    
        <Landing/>
      
    </CardContent>
   </Card>
  );
}

export default App;
