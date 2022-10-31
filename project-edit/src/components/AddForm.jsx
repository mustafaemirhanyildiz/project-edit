import { Form, Button } from "react-bootstrap"
import { EmployeeContext } from "../contexts/EmployeeContext"
import { useContext,useState } from "react"



const AddForm=()=>{

    const {addEmployee}=useContext(EmployeeContext)

    const [newEmployee,setNewEmployee]=useState({
        name:"",email:"",website:"",phone:""
    })

    const onInputChange=(e)=>{
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }
    const {name,email,phone,website}=newEmployee

    const handleSubmit=()=>{
        console.log(newEmployee.name)
        addEmployee(name,email,phone,website)
    }

    return (
        <Form >
            <Form.Group>
                    <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
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
                    onChange={(e)=>onInputChange(e)}
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
                    onChange={(e)=>onInputChange(e)}
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
                    onChange={(e)=>onInputChange(e)}
                    
                    >
                    </Form.Control>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="success" onClick={handleSubmit} >
                    Add New Employee
                </Button>
            </div>
      
        </Form>

    )
}

export default AddForm