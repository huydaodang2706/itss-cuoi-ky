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
            <div className='cs-block'>
                学生一覧：[{originStudents}] <br/>
            </div>
            <div className='cs-block'>
                削除値を入力してください：<br/>
            </div>
            <input className='cs-block' type='text' value={name} onChange={handleChange}/> <br/>
            <button onClick={handleDel} className='cs-button'>確定</button><br/>
            <div className='cs-block'>
                削除する名前: {name} <br/>
            </div>
            <div className='cs-block'>
                新しい一覧: [{students.join(', ')}] <br/>
            </div>
            
        </div>
    )
}

export default Delete
