
import Cate from './Cate'
import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker,InfoWindow  } from 'google-maps-react';
import axios from 'axios'

function Content() {
  const [latiMe, setLatiMe] = useState(0)
  const [longiMe, setLongiMe] = useState(0)
  const [maxDis, setMaxDis] = useState(5)


  const containerStyle = {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  const [stores, setStores] = useState([])
  
  // fetch data from server 
  useEffect(() => {
    axios.get(`http://localhost:5000/store-near?lng=${longiMe}&lat=${latiMe}&maxDis=${maxDis}000`)
      .then (data => {setStores(data.data.data)})
  },[latiMe, longiMe, maxDis])
     
  // your location 
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(function(position) {
          setLatiMe(position.coords.latitude)
          setLongiMe(position.coords.longitude)
        });
  }, [])

  //click maker
  function onHandleMarker(store) {
    console.log(store.name)
  }

  // loot maker 
  function displayMarkers(){
      return stores.map((store, index) => {
      
        return <Marker 
          key={index} id={index} position={{
          lat: store.dist.location[1],
          lng: store.dist.location[0]
          }}
        icon={{
          url: "./image/download.png",
          anchor: new window.google.maps.Point(32,32),
          scaledSize: new window.google.maps.Size(40,40)
      }}
        onClick={()=>onHandleMarker(store)} />
      })
    }

  let MapTemp
  latiMe !== 0 && longiMe !== 0 ?
  MapTemp = (<Map
      google={window.google}
      zoom={17}
      containerStyle={containerStyle}
      className={'map-custom'}
      initialCenter={{ lat:latiMe, lng: longiMe}}
      draggable={true}
      >
      <Marker position={{ lat:latiMe, lng: longiMe}}>
        <InfoWindow>
            <p>Something..</p>  
          </InfoWindow>
        </Marker>
      {displayMarkers()}
    </Map>)
      
    :
    MapTemp = (<div className="map-custom"></div>)
    

    function onHandleKm(filter) {
      setMaxDis(filter)
      
    }
   
    return (
        <div className="content">
            {MapTemp}
            <Cate stores= {stores} onHandleKm= {onHandleKm}/> 
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCWVs7Gy1syqpUYjxLCC-8vUHhE02Mxcuc'),

  })(Content)