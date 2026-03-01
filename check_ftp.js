import * as ftp from "basic-ftp"

async function checkFtp() {
    const client = new ftp.Client()
    try {
        await client.access({
            host: "viviri.ftp.tb-hosting.com",
            user: "viviritoit@viviritoit",
            password: "@Nicotina_1969!!",
            secure: false
        })
        const list = await client.list()
        console.log("Root content:");
        list.forEach(item => console.log(item.name, item.isDirectory ? "(DIR)" : ""));
    }
    catch (err) {
        console.log(err)
    }
    client.close()
}

checkFtp()
