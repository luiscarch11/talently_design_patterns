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
    path:string
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
class LocalFileAdapter extends File{

    bytes: Uint8Array
    name: string
    extension: string
    constructor(file:LocalFile){
            super()
            const buffer=LocalFileAdapter.base64ToArrayBuffer(file.content)
            const splitPath=file.path.split("/")
            const name=splitPath[splitPath.length-1]
            const splitName=name.split(".")
            const extension=splitName[splitName.length-1]
            this.bytes=buffer
            this.name=name
            this.extension=extension
    }
    static base64ToArrayBuffer(base64:string) :Uint8Array{
        return Uint8Array.from(atob(base64), c => c.charCodeAt(0))
    }

}

const file= FilePicker.pickFile()
new FileUploader().uploadFile(new LocalFileAdapter(file))




export{}