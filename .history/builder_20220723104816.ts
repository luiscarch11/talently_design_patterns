class GoogleMap{

    markerColor=''
    currentLocation=new LatLen(0,0)
    
    setMarkerColor(markerColor:string){
        this.markerColor=markerColor
    }
    setCurrentLocation(currentLocation:LatLen){
        this.currentLocation=currentLocation
    }
    showProperties(){
        console.log(        +`\nmarkerColor: ${this.markerColor}`
        +`\ncurrentLocation: ${this.currentLocation}`
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

abstract class GoogleMapBuilder{
    googleMap=new GoogleMap()
    build(){
        this.googleMap.showProperties()
    }

    abstract setMarkerColor():void
    abstract setCurrentLocation():void
}
class GoogleMapBuilderHotel extends GoogleMapBuilder{
    
    setMarkerColor(){
        this.googleMap.setMarkerColor('red')
    }
    setCurrentLocation(){
        this.googleMap.setCurrentLocation(new LatLen(10,10))//localicación de un hotel
    }
    
}
const mapBuilder=new GoogleMapBuilderHotel()
mapBuilder.build()