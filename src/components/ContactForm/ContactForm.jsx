import { Form, Label, Input, Button } from "./ContactForm.styled";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";
import { addContactThunk } from "../../redux/contactsThunks";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectItems);

    const [data, setData] = useState({
        name: '',
        phone: '',
    })

    const handleChange = ({target:{name, value}}) => {
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isExist = contacts?.find(({name}) => name.toLowerCase() === data.name.toLowerCase());
        if (isExist) {
            return alert(`${data.name} is already exist`);
        }

        dispatch(addContactThunk(data));

        setData({
            name: '',
            phone: '',
        });
    }

    return (
      <Form onSubmit={handleSubmit}>
        <Label>Name
            <Input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Alex" required />
        </Label>
        <Label>Number
            <Input type="tel" name="phone" value={data.phone} onChange={handleChange} placeholder="123-456-78" required />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    )
}

export default ContactForm