import fs, {
    writeFileSync
} from 'fs';
import memes from '../database/memes.json';
import hosts from '../database/hosts.json'

dothing()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dothing() {
    var stream = fs.createWriteStream("database/memes.json");
    stream.on('error', console.error);
    let new_memes = memes
    for (let i = 0; i < memes.length; i++) {
        delete new_memes[i]['hosts']
    }
    const new_data = JSON.stringify(new_memes);
    stream.write(new_data);
    stream.end();
}

function create_host(stream, host) {
    console.log(host.id)
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ];
    const new_data = JSON.stringify(new_hosts);
    stream.write(new_data);

}