import { render } from "@testing-library/react";
import DisplayList from "./DisplayList.jsx";

const dataArr = [{
        pokemon: 'test-name',
        hp: 10,
        base_experience: 15,
        type_1: 'test-type'
    }]

it('matches snapshot', () => {
    const {container} = render(<DisplayList dataArr={dataArr}/> );
    expect(container).toMatchSnapshot();
})