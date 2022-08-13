interface IUploadFileSDK{
    uploadFile(file:File):void
}
class FileUploader implements IUploadFileSDK{
    uploadFile(file: File): void {
        console.log(`uploading ${file.toString()}`)
    }

}
abstract class File{
    abstract bytes :Uint8Array
    abstract name:string
    abstract extension:string
    toString():string{
        return `BYTES: ${this.bytes}\nNAME: ${this.name}\nEXTENSION: ${this.extension}`
    }
}
class LocalFile {
    ///base64 file information
    content:string
    path:string//  ~/Documents/path/to/file.jpg
    constructor(content:string, path:string){
        this.content=content
        this.path=path
    }
}
class FilePicker{
   static pickFile():LocalFile{
        return new LocalFile("contentoffileinbase64", "path/to/file.jpg")
    }
}

class FileAdapter extends File{
    bytes: Uint8Array
    name: string
    extension: string
    constructor(file:LocalFile){
        super()
        this.bytes=FileAdapter.base64ToArrayBuffer(file.content)
        const splitPath=file.path.split("/")
        this.name=splitPath[splitPath.length-1]
        const splitName=this.name.split(".")
        this.extension=splitName[splitName.length-1]
    }
    static base64ToArrayBuffer(base64:string) :Uint8Array{
        return Uint8Array.from(atob(base64), c => c.charCodeAt(0))
    }
}
const pickedFile=FilePicker.pickFile()

new FileUploader().uploadFile(new FileAdapter(pickedFile))

export{}