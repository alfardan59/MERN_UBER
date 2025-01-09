import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);

  // sample array for location
  const location=[
    "24B, Rani Rashmoni Roy Road,South City Mall,Kolkata",
    "12B, Becker Street Road,Quest Mall,Kolkata",
    "8B, Remount Road,Avani Riverside Mall,Kolkata",
    "2, Rani Rashmoni Roy Road,Lake Mall,Kolkata"
  ]
  return (
    <div>
      {/* LocationSearchPanel Sample Data */}
      {
        location.map(function(elem,idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] flex items-center justify-center h-9 w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      }

      
      
    </div>
  )
}

export default LocationSearchPanel
