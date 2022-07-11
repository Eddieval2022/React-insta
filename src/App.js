import {useState} from "react";

import './App.css';

function App() {

  const [photos, setPhotos] = useState([]);

  const fetchImages = async () =>{
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  }

  return (
    
    <div className="App">
      <h1>Test</h1>
     <button onClick={(e)=> fetchImages()}>Fetch photos from LoremPicsum</button>
     
     {photos.map((item, index)=>{
      return<div>
        <img src={item.download_url} />
     </div>
     })}


    </div>
       );
}
export default App;
