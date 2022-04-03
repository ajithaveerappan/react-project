import './App.css'

import{EllipsisOutlined} from  '@ant-design/icons';
import {SearchOutlined}  from '@ant-design/icons';
import 'antd/dist/antd.css';
import {MessageOutlined } from '@ant-design/icons';
import {SmileOutlined } from '@ant-design/icons';
import {PaperClipOutlined } from '@ant-design/icons';
import {CheckOutlined } from '@ant-design/icons';
import {AudioFilled } from '@ant-design/icons';

import myphoto from './myphoto.jpg';
import a1 from './a1.jpg';
import a2 from './a2.jpg';
import a3 from './a3.jpg';
import a4 from './a4.jpg';
import a5 from './a5.jpg';
import a6 from './a6.jpg';
import a7 from './a7.jpg';
import e1 from './e1.png';


function App() {
  return (
     <div class="main" >
       <div class="kuttybox"></div>
       <div class="container">
        
         
         <div class="leftbox">
         <div class="box1">
           <img src={myphoto} class="picture"/>
        
        
            <div class="icons">
         <MessageOutlined  style={{fontSize:"25px",color:"gray"}}/>
         <EllipsisOutlined   style={{fontSize:"25px",transform: "rotate(90deg)",color:"gray"}}/>
         </div>
         
         
          
         </div>
        
                <div class="box2">Search or start new chat</div>
                <div class="searchsymbol">
                <SearchOutlined style={{fontSize:"25px",color:"gray"}} />
               </div>
                <div class="person1">
                  <img src={a2} class="picture"/>
                <p class="text">Ajitha</p>
                <p class="text2">typing...</p>
                 <p class="text3">02:01</p>
                 </div>
                
                 <div class="person2">
                     <img src={a1} class="picture"></img>
                     <p class="text1">vikram veera</p>
                     <p class="text2a"> in box top n center</p>
                     <p class="text3">Yesterday</p>
                     </div>
                     <div class="person3">
                       <img src={a3} class="a3picture"/>
                       <p class="first">Guru varsha</p>
                       <p class="second">K</p>
                       <p class="third">Yesterday</p>

                     </div>
                     <div class="person4">
                       <img src={a4} class="a4picture"/>
                       <p class="four">Vijaykumar</p>
                       <p class="five">Busy..</p>
                       <p class="six">Yesterday</p>
                     </div>
                     <div class="person5">
                       <img src={a5} class="a5picture"/>
                       <p class="seven">Devi Iswarya</p>
                       <p class="eight">At working</p>
                       <p class="nine">Monday</p>
                     </div>
                     <div class="person6">
                       <img src={a6} class="a6picture"/>
                       <p class="ten">Maha sree</p>
                       <p class="eleven">K</p>
                       <p class="twelve">Monday</p>

                     </div>
                     <div class="person7">
                       <img src={a7} class="a7picture"/>
                       <p class="thirteen">Mirunalini</p>
                       <p class="fourteen">Busy</p>
                       <p class="fifteen">Friday</p>
                     </div>
                     
                     
                     
                     

                     
                  </div>
         
         <div class="rightbox">
        
           <div class="item1">
             <p >22 January 2015</p>
           </div>
           <div class="item2">
             <p>Hey!Have you seen Whatsapp Web feature?</p>
             <div class="time1">
               <p>02:00</p>
               <div class="sis">
               <CheckOutlined   style={{fontSize:"16px",color:"blue"}}/>
               <div class="sis2">
               <CheckOutlined   style={{fontSize:"16px",color:"blue"}}/>
               </div>
               </div>
             </div>
           </div>
        <div class="item3">
          <p>Yeah....Awsummm</p>
          <div class="emoji">
            <img src={e1} class="emojipicture" />
            </div>
            <div class="emoji2">
            <img src={e1} class="emojipicture" />
            </div>
            
        
        
        <div class="time2">
          <p>02:01</p>
          </div>
        </div>
        <div class="item4">
          <p>Find more details on</p>
          <p class="link">http://thehackernews.com"</p>
          <div class="newline">
            <p>I have just published an article about it.</p>
          </div>
          <div class="time3">
            <p>02:01</p>
            <div class="sis1a">
               <CheckOutlined   style={{fontSize:"16px",color:"blue"}}/>
               <div class="sis2a">
               <CheckOutlined   style={{fontSize:"16px",color:"blue"}}/>
               </div>
               </div>
          </div>
          
          </div>
            <div class="startbox">
              <img src={a2} class="picture"/>
               <p class="b1">Ajitha</p>
               <p class="b2">typing...</p>
               <div class="aji">
               <PaperClipOutlined   style={{fontSize:"25px",color:"gray"}}/>
               </div>
               <div class="viki">
               <EllipsisOutlined   style={{fontSize:"25px",transform: "rotate(90deg)",color:"gray"}}/>
               </div>
               
                
            </div>
            <div class="endbox"></div>
            <div class="x">
            <SmileOutlined  style={{fontSize:"25px",color:"gray"}}/>
            </div>
            <div class="y"></div>
            <div class="z">
            <AudioFilled  style={{fontSize:"25px",color:"gray"}}/> 
            </div>
        </div>
        </div>
        </div>
      
       
     
     
  
    
    
   
            

                
    
  );
}
export default App;
