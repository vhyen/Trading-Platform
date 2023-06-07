import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NameRegister from '../../components/auth/NameRegister'
import { User } from '../../constants/types'
import axios, { AxiosError } from 'axios'
import {account} from '../../client/axios'
import APIS from '../../constants/api'
import { Color } from '../../constants/Color'
export default function SignUpForm() {
	const navigate = useNavigate()

	interface InputError {
		username?: string
		password?: string
		email?: string
		detail?: string
		firstname?: string
		lastname?: string
	}

	const [inputError, setInputError] = useState<InputError>({})

	const onFinish = (values: any) => {
		account
			.post<User>(APIS.SIGN_UP, {
				username: values.username,
				first_name: values.firstname,
				last_name: values.lastname,
				password: values.password,
				email: values.email,
			})
			.then(() => {
				navigate('/')
			})
			.catch((err: Error | AxiosError<InputError>) => {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						setInputError(err.response.data)
					}
				}
			})
	}

	return (
		<div className="d-flex flex-column">
			<Container className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
				<Form
					onFinish={onFinish}
					name="basic"
					initialValues={{ remember: true }}
					autoComplete="off"
					size="large"
				>
					<NameRegister inputError/>
					<Form.Item
						label=""
						validateStatus={inputError.username ? 'error' : ''}
						hasFeedback
						help={inputError.username}
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input
							placeholder="Username"
							style={{
								borderRadius: 20,
							}}
						/>
					</Form.Item>

					<Form.Item
						label=""
						name="email"
						validateStatus={inputError.email ? 'error' : ''}
						hasFeedback
						help={inputError.email}
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
					>
						<Input
							placeholder="Email"
							style={{
								borderRadius: 20,
							}}
						/>
					</Form.Item>

					<Form.Item
						label=""
						name="password"
						validateStatus={inputError.password ? 'error' : ''}
						hasFeedback
						help={inputError.password}
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password
							placeholder="Password"
							style={{
								borderRadius: 20,
							}}
						/>
					</Form.Item>

					<Form.Item
						label=""
						name="confirm_password"
						dependencies={['password']}
						hasFeedback
						help
						rules={[
							{
								required: true,
								message: 'Please confirm your password!',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue('password') === value
									) {
										return Promise.resolve()
									}
									return Promise.reject(
										new Error(
											'The two passwords that you entered do not match!'
										)
									)
								},
							}),
						]}
					>
						<Input.Password
							placeholder="Confirm Password"
							style={{
								borderRadius: 20,
							}}
						/>
					</Form.Item>
					
					<Form.Item
						validateStatus={inputError.detail ? 'error' : ''}
						hasFeedback
						help={inputError.detail}
						style={{
							textAlign: 'center',
						}}
					>
						<Button
							type="primary"
							htmlType="submit"
							size="large"
							style={{
								borderRadius: 20,
								width: '60%',
								backgroundColor:Color.main,
								color:Color.primary,
								fontWeight:"bold"
							}}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Container>
		</div>
	)
}