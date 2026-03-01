import * as ftp from "basic-ftp"

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "viviri.ftp.tb-hosting.com",
            user: "viviritoit@viviritoit",
            password: "@Nicotina_1969!!",
            secure: false
        })
        console.log("Connected to FTP server.")
        await client.ensureDir("/www")
        await client.uploadFromDir("dist")
        console.log("Upload completed.")
    }
    catch (err) {
        console.log(err)
    }
    client.close()
}

deploy()
