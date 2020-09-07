import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker,InfoWindow  } from 'google-maps-react';
import axios from 'axios'



const Mapp = function() {
   const containerStyle = {
  
      width: '100%',
      height: '100%'
    }
    const [stores] = useState([
        {latitude: 10.8830253, longitude: 106.7795147},
        {latitude: 10.884800, longitude: 106.781375},
        {latitude: 10.884800,  longitude: 106.781375},
    ])
     
    const [latiMe, setLatiMe] = useState(0)
    const [longiMe, setLongiMe] = useState(0)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatiMe(position.coords.latitude)
            setLongiMe(position.coords.longitude)
          });
    }, [])
    useEffect(() => {
      axios.get(`http://localhost:5000/store-near?lng=${longiMe}&lat=${latiMe}`)
        .then (data => console.log(data.resp.data))
    },[latiMe, longiMe])
    console.log(latiMe)
    function displayMarkers(){
        return stores.map((store, index) => {
         
          return <Marker 
          key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         icon={{
            url: "./image/download.png",
            anchor: new window.google.maps.Point(32,32),
            scaledSize: new window.google.maps.Size(40,40)
        }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
    return (
      latiMe !== 0 && longiMe !== 0 ?
          <Map
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
          </Map>
        :
        <div className="map-custom"></div>
    )
  
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCWVs7Gy1syqpUYjxLCC-8vUHhE02Mxcuc'),

  })(Mapp)

  