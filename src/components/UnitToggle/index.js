const UnitToggle = (
  let temparatureChange = (temp) => temp / 100 * 98

  return (
    <div>
       <p class="para">Dispaly of temparature: {temparatureChange}</p>
       <button class="tempButton" onclick="temparatureChange">Temp Change</button>
   </div> 
  )
)

export default UnitToggle