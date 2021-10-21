import { useEffect, useState } from "react"

// Code for useDoctors
const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./API/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return { doctors, setDoctors };
}

export default useDoctors;