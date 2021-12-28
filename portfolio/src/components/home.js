import { height } from '@mui/system';
import Img from '../header.png';
function Home(){
return(
<div className = "containerHome">
    <img src={Img} style = {{width: '100%', height: '400px'}}/>
    <p>hi</p>
</div>
);
}

export default Home;