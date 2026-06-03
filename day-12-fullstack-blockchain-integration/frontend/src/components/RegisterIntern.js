import { useState } from "react";
import axios from "axios";

function RegisterIntern() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        walletAddress: "",
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            "http://localhost:5000/api/interns",
            form
        );

        alert("Intern Registered");

    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <input
                name="walletAddress"
                placeholder="Wallet Address"
                onChange={handleChange}
            />

            <button type="submit">
                Register
            </button>

        </form>
    );
}

export default RegisterIntern;