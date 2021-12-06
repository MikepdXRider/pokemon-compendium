import { render } from "@testing-library/react"
import DisplayCard from "./DisplayCard.jsx"

const testDataObj = {
    pokemon: 'test-name',
    hp: 10,
    base_experience: 15,
    type_1: 'test-type'
}

it('matches snapshot', () => {
    const {container} = render(<DisplayCard dataObj={testDataObj}/> );
    expect(container).toMatchSnapshot();
})