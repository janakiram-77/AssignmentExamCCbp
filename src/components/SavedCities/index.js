const SavedCities = (
    state = {cities: ""}
    const setState({cities: savedCities})
    savedcities = localStorage("citiesToBeSaved", savedCities)

    const savedCities = (city) => {
        savedCities = [city, ...SavedCities]
    } 
     let length = savedCities.length
     
    
    return (
        <div>
           <select class="select">
            for (i=0; i < length ; i++) {
              <options class="options">{savedCities[i]}</options>
            }
           </select>
        </div>
    )
)

export default SavedCities