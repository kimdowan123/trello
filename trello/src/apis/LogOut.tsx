import axios from 'axios';

export default function LogOut(){
    axios.post('/api/LogOut',function(){
        console.log('๋ก๊ทธ์์')
    })
};