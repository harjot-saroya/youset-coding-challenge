import { useParams } from 'react-router-dom'
import data from '../../data.json';
import { FormQuestion, QuestionBody, FormBody } from '../../styles/form/styles';
export const Form = () => {
    const { id } = useParams()
    const packageName = data[id].name + ' package'
    return (<FormBody>
        <h1>{packageName}</h1>
        <QuestionBody>
            <FormQuestion className='formQuestion'>
                <label>What is your email? </label>
                <input type="text" name="name" />
            </FormQuestion>
            <FormQuestion className='formQuestion'>
                <label>How old are you? </label>
                <input type="number" name="age" />
            </FormQuestion>
            <FormQuestion className='formQuestion'>
                <label>What is your gender? </label>
                <input type="text" name="gender" />
            </FormQuestion>
            <FormQuestion className='formQuestion'>
                <input type="submit" value="Submit" />
            </FormQuestion>
        </QuestionBody>
    </FormBody>)
}
