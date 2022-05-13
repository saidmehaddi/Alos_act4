import {
    writeFileSync
} from 'fs'
import memes from '../../database/memes.json'
import hosts from '../../database/hosts.json'
import reviews from '../../database/reviews.json'
import users from '../../database/users.json'




/**
 * memes
 */

export function get_memes() {
    return memes
}

export const get_meme = id => {
    const meme = memes.find(meme => meme.id == id)

    return meme
}


export function add_meme(meme) {
    let new_memes = [
        ...memes,
        {
            ...meme,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_memes)

    writeFileSync("database/memes.json", new_data)

    return new_memes
}


export function update_meme(id, data) {
    let index = memes.findIndex(meme => meme.id == id)
    Object.entries(data).map(([key, value]) => {
        memes[index][key] = value
    });

    const new_data = JSON.stringify(memes)

    writeFileSync("database/memes.json", new_data)

    return memes
}
export function delete_meme(id) {
    let index = memes.findIndex(meme => meme.id == id)

    memes.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(memes)

    writeFileSync("database/memes.json", new_data)

    return memes
}




/**
 * HOSTS
 */

export function get_hosts() {
    return hosts
}

export const get_meme_hosts = meme_id => {

    return hosts.filter(host => host.meme_id == meme_id)
}

export function add_host(host) {
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}

export function delete_hosts(meme_id) {
    let new_hosts = hosts.filter(host => host.meme_id != meme_id)

    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}


// get_meme_reviews
export function get_meme_reviews(meme_id) {
    return reviews.filter(review => review.meme_id == meme_id)
}

//     get_user_reviews
export function get_user_reviews(user_id) {
    return reviews.filter(review => review.user_id == user_id)
}

//     add_review
export function add_review(review) {
    let new_reviews = [
        ...reviews,
        {
            ...review,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_reviews)

    writeFileSync("database/reviews.json", new_data)

    return new_reviews
}

//     delete_review

export function delete_review(id) {
    let index = reviews.findIndex(review => review.id == id)

    reviews.splice(index, 1)
    const new_data = JSON.stringify(reviews)

    writeFileSync("database/reviews.json", new_data)

    return reviews
}

//users

export function get_users() {
    return users;
}

//get user

export const get_user = id => {
    const user = users.find(user => user.id == id)

    return user
}


//create user

export function add_user(user) {
    let new_users = [
        ...users,
        {
            ...user,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_users)

    writeFileSync("database/users.json", new_data)

    return new_users
}

//delete user

export function delete_user(id) {
    let index = users.findIndex(user => user.id == id)

    users.splice(index, 1)
    const new_data = JSON.stringify(users)

    writeFileSync("database/users.json", new_data)

    return users
}

//delete user review

export function delete_user_reviews(user_id) {
    let new_reviews = reviews.filter(review => review.user_id != user_id)

    const new_data = JSON.stringify(new_reviews)

    writeFileSync("database/reviews.json", new_data)

    return new_reviews
}