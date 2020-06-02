import React from 'react'
import { generate } from 'til-client-test-utils'
import { renderIntoDocument, cleanup } from 'react-testing-library'
import MentorLogin from '../MentorLogin'

afterEach(cleanup)

test('calls onSubmit with the username and password when submitted', () => {
    const fakeUser = generate.loginForm()
    const handleSubmit = jest.fn()
    const { getByLabelText, getByText } = renderIntoDocument(
        <MenteeLogin onSubmit={handleSubmit} />,
    )

    const usernameNode = getByLabelText('username')
    const passwordNode = getByLabelText('password')

    usernameNode.value = fakeUser.username
    passwordNode.value = fakeUser.password
    getByText('submit').click()

    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
})

test('snapshot', () => {
    const { container } = render(<MentorLogin />)
    expect(container).toMatchSnapshot()
})