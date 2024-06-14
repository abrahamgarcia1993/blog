import { pool } from "./database/mysqlDb";

async function getPost(){
    try {
        const results= pool.query("SELECT * FROM  post")
        return results
    } catch (error) {
        console.error(error)
    }
}


async function addPost(newPost){
    try {
        const {title, content, userId}=newPost
        const results= pool.query("INSERT INTO posts (title, content, userId, createdAt, updatedAt) value (?,?,?,NOW(), NOW() )",
            [title, content, userId]
        )
        return results
    } catch (error) {
        console.error(error)
    }
}

async function updatePost(updated, id){
    try {
        const{title, content, userId}=updated
        const results= pool.query("UPDATE SET (title=? content=? userId=? createdAt=NOW() updatedAt= NOW() WHERE id=?)",
            [title, content, userId, id]
        )
        return results
    } catch (error) {
        console.error(error)
    }
}


async function deletePost(id){
    try {
        const results= pool.query("DELETE FROM posts where id=?", id)
        return results
    } catch (error) {
        console.error(error)
    }
}

export {getPost,addPost,updatePost,deletePost}