import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFeching2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idChangeFormButton, setIdChangeFormButton] = useState(1)

    const handler = () => {
        setIdChangeFormButton(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idChangeFormButton}`)
             .then(res => {
                console.log(res);
                setPost(res.data);
             })
             .catch(err => {
                console.log(err);
             })
    }, [idChangeFormButton])

  return (
    <div>
        <input type='text' onChange={e => {setId(e.target.value)}}></input>
        <button type='button' onClick={handler}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFeching2