import data from '../data.json';
import { PackageTable, Cell, Row, SelectButton, DescriptionCell } from "../styles/home/styles.js"
import { useNavigate } from 'react-router-dom';

export const Packages = (props) => {
    const navigate = useNavigate();

    let handleSelection = (props) => {

        const { packageName } = props;
        console.log('TEST', packageName)
        navigate('/form/:test');

    }
    const obj = Object.keys(data).map((element) => { return <Row><Cell>{data[element].name}</Cell><DescriptionCell>{data[element].description}</DescriptionCell><Cell>{data[element].price}</Cell><Cell><SelectButton onClick={() => { handleSelection({ packageName: element }) }}> Select</SelectButton></Cell></Row > })
    return <PackageTable><th>Name</th><th>Description</th><th>Price</th>{obj}</PackageTable>
}
