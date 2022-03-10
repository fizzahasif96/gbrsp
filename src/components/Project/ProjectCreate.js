import React from 'react'
import './style.css'

const ProjectCreate = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    isJoinedNewsLetter: true
})


function handleEvent(event){
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name] : type === "checkbox" ? checked : value
        }
    })
}
function handleSubmit(event){
    event.preventDefault()
    if(formData.password != formData.confirmPassword){
        console.log("Passwords do not match");
    }
    else{
        console.log("Successfully signed up!")
    }
    console.log(formData);
}
  return (
    <div className='container'>
            <br />
            <form onSubmit={handleSubmit}>
                <br/>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={handleEvent}
                    name="email"
                    value={formData.email}
                    className="input"
                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={handleEvent}
                    name="password"
                    value={formData.password}
                    className="input"
                />
                <input
                    type="text"
                    placeholder="Confirm Password"
                    onChange={handleEvent}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    className="input"
                />
                <br/>
                <input 
                    type="checkbox"
                    onChange={handleEvent}
                    name="isJoinedNewsLetter"
                    checked={formData.isJoinedNewsLetter}
                    id="isJoinedNewsLetter"
                    className='checkbox'
                />
                <label htmlFor="isJoinedNewsLetter">I want to join the news letter.</label>
                <br/>
                <br/>
                <br/>
                <button className='btn'>Submit</button>
            </form>
        </div>
  )
}

export default ProjectCreate