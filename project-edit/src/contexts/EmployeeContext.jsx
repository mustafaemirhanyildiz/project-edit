import {useState,createContext, useEffect}  from "react"
import {v4 as uuidv4} from 'uuid';
import axios from "axios"


export const EmployeeContext=createContext()



const EmployeeContextProvider=(props)=>{

    
const[employees,setEmployees]=useState([])

useEffect(()=>{
    async function fetchData(){
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
          );
          console.log(data);
          setEmployees(data)
    }
    fetchData();

},[])

const addEmployee=(name,email,website,phone)=>{
    const newEmployee={id:uuidv4(),name,email,website,phone}
    setEmployees([...employees,newEmployee])
    axios.post(`https://jsonplaceholder.typicode.com/users`,newEmployee)
         .then(response=>{
            console.log(response)
         })
         .catch(error=>{
            console.log(error)
         })

}

const deleteEmployee=(id)=>{
    setEmployees(employees.filter(employee=>employee.id!== id))
    async function deleteEmp(){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
           console.log(`id-> ${id}  is deleted`)
        })
        .catch(error=>{
           console.log(error)
        })
    }
    deleteEmp()
}

const updateEmployee=(id,updatedEmployee)=>{
    setEmployees(employees.map((employee)=>employee.id===id?updatedEmployee:employee))
}

    return (
        <EmployeeContext.Provider value={{employees,addEmployee,deleteEmployee,updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}



export default EmployeeContextProvider