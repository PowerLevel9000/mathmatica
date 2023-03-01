import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Default from "../../Default";

import React from 'react'

const DefaultTest = () => {
  return (
    <BrowserRouter>
      <Default />
    </BrowserRouter>
  )
}

describe("Deafault page should be render in routing", () => {

  test("card should be there", () => {
    render(<DefaultTest />)
    const section404 = screen.getByRole("section")
    expect(section404).toBeInTheDocument()
  })

  test("card should be there", () => {
    render(<DefaultTest />)
    const heading404 = screen.getByRole("heading")
    expect(heading404).toBeInTheDocument()
  })

  test("card should be there", () => {
    render(<DefaultTest />)
    const text404 = screen.getByText("the page you are looking for not avaible!")
    expect(text404).toBeInTheDocument()
  })
})

