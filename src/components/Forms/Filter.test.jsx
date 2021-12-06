import { render } from "@testing-library/react";
import Filter from "./Filter.jsx";

const typeDataArr = ['test-type1', 'test-type2'];

it('matches snapshot', () => {
    const {container} = render(<Filter typeDataArr={typeDataArr}/> );
    expect(container).toMatchSnapshot();
})