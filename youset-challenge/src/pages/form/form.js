import { useParams } from 'react-router-dom'
import data from '../../data.json';
import axios from 'axios';
import React, { useState } from 'react'
import { FormQuestion, QuestionBody, FormBody } from '../../styles/form/styles';

export const Form = () => {
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('male')
    const { id } = useParams()
    const packageName = data[id].name + ' package'
    const packageDescription = data[id].description
    const packagePrice = data[id].price
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const SubmitForm = async () => {
        await axios.post('http://localhost:3001/www.example.com', { email, age, gender, packageName, packageDescription, packagePrice });
        window.location.href = 'http://localhost:3000/'
    }

    return (<FormBody>
        <h1>{packageName}</h1>
        <QuestionBody onSubmit={() => { SubmitForm() }}>
            <FormQuestion className='formQuestion'>
                <label>What is your email? </label>
                <input type="text" name="name" onChange={emailHandler} />
            </FormQuestion>
            <FormQuestion className='formQuestion'>
                <label>How old are you? </label>
                <input type="number" name="age" onChange={ageHandler} />
            </FormQuestion>
            <FormQuestion className='formQuestion'>
                <label>What is your gender? </label>
                <br />
                <label>
                    <input type="radio" value="option1" checked={gender === 'male'} onClick={() => setGender('male')} />
                    Male
                </label>
                <label>
                    <input type="radio" value="option1" checked={gender === 'female'} onClick={() => setGender('female')} />
                    Female
                </label>
            </FormQuestion>
            <FormQuestion className='formQuestion'>
                <input type="submit" value="Submit" />
            </FormQuestion>
        </QuestionBody>
    </FormBody>)
}
