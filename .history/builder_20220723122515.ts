class GoogleMap{
    markerColor=''
    currentLocation =new LatLen(0,0)
    setMarkerColor(markerColor:string){
        this.markerColor=markerColor
    }
    setCurrentLocation(currentLocation:LatLen){
        this.currentLocation=currentLocation
    }
    showProperties(){
        console.log(`markercolor: ${this.markerColor}, currentLocation:${this.currentLocation.toString()}`)
    }
}
class LatLen{
    lat:number
    len:number
    constructor(lat:number, len:number){
        this.lat=lat
        this.len=len
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
    abstract setCurrentLocation():void
    abstract setMarkerColor():void
}
class GoogleMapBuilderHotel extends GoogleMapBuilder{
    setCurrentLocation(): void {
        this.googleMap.setCurrentLocation(new LatLen(10,10))//coords de un hotel
    }
    setMarkerColor(): void {
        this.googleMap.setMarkerColor('blue')//coords de un hotel
    }
}
class GoogleMapBuilderOffice extends GoogleMapBuilder{
    setCurrentLocation(): void {
        this.googleMap.setCurrentLocation(new LatLen(56,45))//coords de una oficina
    }
    setMarkerColor(): void {
        this.googleMap.setMarkerColor('red')
    }
}


let mapBuilder=new GoogleMapBuilderHotel()
mapBuilder.build()
mapBuilder=new GoogleMapBuilderOffice()
mapBuilder.build()