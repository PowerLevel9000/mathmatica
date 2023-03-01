import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../../Navigation';
import React from 'react'
describe('testing the navigation componennt', () => {
  const NavigationTest = () => {
    return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
  }

  test("Main wrapper of the navigation bar should be 2", () => {
    render(<NavigationTest />)
    const navWrappers = screen.getAllByRole("nav-main-elements");
    expect(navWrappers.length).toBe(2)
  })

  test("Main menu elements shoul be 3", () => {
    render(<NavigationTest />)
    const navWrappers = screen.getAllByRole("list");
    expect(navWrappers.length).toBe(3)
  })
})