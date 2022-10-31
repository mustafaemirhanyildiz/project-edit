import { Form, Button } from "react-bootstrap"
import { EmployeeContext } from "../contexts/EmployeeContext"
import { useContext,useState } from "react"
import {v4 as uuidv4} from 'uuid';



const EditForm=({theEmployee})=>{

    const id=theEmployee.id

    const[name,setName]=useState(theEmployee.name)
    const[email,setEmail]=useState(theEmployee.email)
    const[website,setWebsite]=useState(theEmployee.website)
    const[phone,setPhone]=useState(theEmployee.phone)


    const {updateEmployee}=useContext(EmployeeContext)
    const updatedEmployee={id:uuidv4(),name,email,website,phone}

    const handleSubmit=(e)=>{
        updateEmployee(id,updatedEmployee)
    }


    return (
        <Form >
            <Form.Group>
                    <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    required
                    >
                    

                    </Form.Control>
            </Form.Group>
            <Form.Group>
                    <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    >
                    

                    </Form.Control>
            </Form.Group>
            <Form.Group>
                    <Form.Control
                    as="textarea"
                    placeholder="website"
                    name="website"
                    value={website}
                    onChange={(e)=>{setWebsite(e.target.value)
                    console.log(e.target.value)
                    console.log(website)}}
                    rows={3}
                    >
                    

                    </Form.Control>
            </Form.Group>
            <Form.Group>
                    <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"   
                    value={phone}
                    onChange={(e)=>{setPhone(e.target.value)}}

                    >
                    </Form.Control>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="success" onClick={handleSubmit}>
                    Edit Employee
                </Button>
            </div>
        </Form>

    )
}

export default EditForm