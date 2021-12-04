import { render } from "@testing-library/react";
import Sort from "./Sort.jsx";

const optionsArr = ['test-options1', 'test-options2'];

it('matches snapshot', () => {
    const {container} = render(<Sort optionsArr={optionsArr}/> );
    expect(container).toMatchSnapshot();
})