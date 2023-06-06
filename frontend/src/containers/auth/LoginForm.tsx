import { Checkbox, Form, Input, Button } from 'antd'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { SigninCredentails, User } from '../../constants/types'
import account from '../../client/axios'
import APIS from '../../constants/api'
import LOCAL_STORAGE_KEYS from '../../constants/local_storage'
import { setToken } from '../../redux/user/slice'
import axios, { AxiosError } from 'axios'
import { Color } from '../../constants/Color'


export default function SignInForm() {
	interface InputError {
		username?: string
		password?: string
		detail?: string
	}

	const [inputError, setInputError] = useState<InputError>({})
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const onFinish = (values: SigninCredentails) => {
		account
			.post<User>(APIS.SIGN_IN, {
				username: values.username,
				password: values.password,
			})
			.then((response) => {
				if (response.data.token) {
					localStorage.setItem(
						LOCAL_STORAGE_KEYS.TOKEN_KEY,
						response.data.token
					)
					dispatch(setToken(response.data.token))
					navigate('/')
				}
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
						style={{
							marginTop: 10,
							marginBottom: 20,
						}}
					>
						<Input
							placeholder="Username"
							style={{
								borderRadius: 20,
								borderColor:Color.main
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
						style={{
							marginBottom: 10,
						}}
					>
						<Input.Password
							placeholder="Password"
							style={{
								borderRadius: 20,
								borderColor:Color.main
							}}
						/>
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						style={{
							marginBottom: 15,
						}}
					>
						<Checkbox>
							Remember me
						</Checkbox>
					</Form.Item>

					<Form.Item
						validateStatus={inputError.detail ? 'error' : ''}
						hasFeedback
						help={inputError.detail}
						style={{
							marginBottom: 20,
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
							Login
						</Button>
					</Form.Item>
				</Form>
			</Container>
		</div>
	)
}