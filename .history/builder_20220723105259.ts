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
        console.log(      `markerColor: ${this.markerColor}\n currentLocation: ${this.currentLocation.toString()}`)

    }

}
class LatLen{
    lat:number
    len:number
    constructor(lat:number,len:number){
        this.lat = lat
        this.len = len
    }
    toString():string{
        return `lat: ${this.lat}, len: ${this.len}`
    }
}

abstract class GoogleMapBuilder{
    googleMap=new GoogleMap()
    build(){
        this.setCurrentLocation()
        this.setMarkerColor()
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
class GoogleMapBuilderOffice extends GoogleMapBuilder{
    
    setMarkerColor(){
        this.googleMap.setMarkerColor('blue')
    }
    setCurrentLocation(){
        this.googleMap.setCurrentLocation(new LatLen(40,10))//localicación de la oficina
    }
    
}
let mapBuilder=new GoogleMapBuilderHotel()
mapBuilder.build()
 mapBuilder=new GoogleMapBuilderOffice()
mapBuilder.build()