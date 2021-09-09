import React from 'react'
import { useState } from 'react'
import useDelete from '../hooks/del'
const Delete = () => {
    const [students, originStudents, delStudent] = useDelete()
    const [name, setName] = useState('')
    
    const handleChange = (e) => {
        setName(e.target.value)
    }
    
    const handleDel = () => {
        delStudent(name)
        setName('')
    }
    return (
        <div>
            学生一覧：[{originStudents}] <br/>
            削除値を入力してください：<br/>
            <input type='text' value={name} onChange={handleChange}/> <br/>
            <button onClick={handleDel}>確定</button><br/>
            削除する名前: {name} <br/>
            新しい一覧: [{students.join(', ')}] <br/>
        </div>
    )
}

export default Delete
