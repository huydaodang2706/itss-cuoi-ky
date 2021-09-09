import { useState, useEffect } from 'react'
const useDelete = () => {
    const [students, setStudents] = useState(['Huyen', 'Hoa', 'Hung', 'Long'])
    const [originStudents, setOriginStudents] = useState('')
    
    useEffect(() => {
        setOriginStudents(students.join(', '))
        console.log(originStudents)
    },[])
    
    const delStudent = (name) => {
        setStudents(students.filter( st => st !== name))    
    }
    return [students, originStudents, delStudent]
}

export default useDelete
