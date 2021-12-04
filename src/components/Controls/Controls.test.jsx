import { render } from "@testing-library/react";
import Controls from "./Controls.jsx";


it('matches snapshot', () => {
    const {container} = render(<Controls typeDataArr={['test1', 'test2', 'test3']}/>)

    expect(container).toMatchSnapshot()
});