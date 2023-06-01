import { Col, Row } from "react-bootstrap";
import { Form, Input } from 'antd'

export default function NameRegister({inputError}:any){
    return(
        <Row>
						<Col>
					<Form.Item
						label=""
						validateStatus={inputError.username ? 'error' : ''}
						hasFeedback
						help={inputError.firstname}
						name="firstname"
						rules={[
							{
								required: true,
								message: 'Please input your firstname!',
							},
						]}
					>
						<Input
							placeholder="Fisrtname"
							style={{
								borderRadius: 20,
							}}
						/>
					</Form.Item>
					</Col>
					<Col>
					<Form.Item
						label=""
						validateStatus={inputError.username ? 'error' : ''}
						hasFeedback
						help={inputError.lastname}
						name="lastname"
						rules={[
							{
								required: true,
								message: 'Please input your lastname!',
							},
						]}
					>
						<Input
							placeholder="Lastname"
							style={{
								borderRadius: 20,
							}}
						/>
					</Form.Item>
					</Col>
					</Row>
    )
}