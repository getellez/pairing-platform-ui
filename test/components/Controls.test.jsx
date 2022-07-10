import { render, screen } from "@testing-library/react";
import { Controls } from "../../src/components/Controls/Controls";

describe('<Controlss /> component', () => {
  test('should there be 3 buttons', () => {
    render(<Controls />)
    expect(screen.getByText('Pair')).toBeTruthy()
    expect(screen.getByText('Save')).toBeTruthy()
    expect(screen.getByText('Cancel')).toBeTruthy()
  })
})