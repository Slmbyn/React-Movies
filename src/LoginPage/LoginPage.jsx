import { useState } from "react"

export default function LoginPage ({ addUser }) {
    const [newUser, setNewUser] = useState('')
    function handleChange (evt) {
        const newUserData = evt.target.value;
        setNewUser(newUserData)
    }
    function handleSubmit (evt) {
        evt.preventDefault();
        addUser(newUser)
    }
    return(
        <>
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>
            <input name='username' value={newUser} onChange={handleChange} /><br />
            <button type="submit">Log-In</button>
        </form>
        </>
    )
}