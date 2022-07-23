class GoogleMap{
    showCurrentLocation=false;
    markerColor=''
    currentLocation=new LatLen(0,0)
    markerCanBeMooved=false
    marker=new Marker()
    
    setShowCurrentLocation(showCurrentLocation:boolean){
        this.showCurrentLocation=showCurrentLocation
    }
    setMarkerColor(markerColor:string){
        this.markerColor=markerColor
    }
    setCurrentLocation(currentLocation:LatLen){
        this.currentLocation=currentLocation
    }
    setMarkerCanBeMooved(markerCanBeMooved:boolean){
        this.markerCanBeMooved=markerCanBeMooved
    }
    setMarker(marker:Marker){
        this.marker=marker
    }
    showProperties(){
        console.log(`showCurrentLocation: ${this.showCurrentLocation}`
        +`\nmarkerColor: ${this.markerColor}`
        +`\ncurrentLocation: ${this.currentLocation}`
        +`\nmarkerCanBeMooved: ${this.markerCanBeMooved}`
        +`\nmarker: ${this.marker}`
        )

    }

}
class Marker{
}
class LatLen{
    lat:number
    len:number
    constructor(lat:number,len:number){
        this.lat = lat
        this.len = len
    }
}