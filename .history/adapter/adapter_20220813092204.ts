interface IUploadFileSDK{
    uploadFile(file:File):void
}
class FileUploader implements IUploadFileSDK{
    uploadFile(file: File): void {
        console.log(`uploading ${file.toString()}`)
    }

}
abstract class File{
    abstract bytes :Int16Array
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

const file= FilePicker.pickFile()
new FileUploader().uploadFile(file)


class LocalFileAdapter extends File{
    bytes: Int16Array
    name: string
    extension: string
    private constructor(bytes: Int16Array,
        name: string,
        extension: string,){
            super()
            this.bytes=bytes
            this.name=name
            this.extension=extension
    }
    static fromLocalFile(file:LocalFile):LocalFileAdapter{
        this.bytes
    }

}

export{}