import React, { Component } from 'react'
import { Form, Input, Button,Row,Col } from 'antd';

export default class AddressForm extends Component {
  onFinish = (values)=>{
    console.log(values);
    this.props.getClusterName(values.address);
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    return (
      <Row style={{marginTop:'10px'}}>
        <Col span={4} offset={2}>
  
        <Form
          name="basic"
          onFinish={this.onFinish}
        >
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please add your address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
        </Col>
      </Row>
      
    )
  }
}
