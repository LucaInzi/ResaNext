import React from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, Row, Col, Typography } from 'antd';

const { Title } = Typography;

function ReservationForm({ onSubmit }) {
    const { register, handleSubmit } = useForm();
  
    // Vérifiez si onSubmit est une fonction, sinon utilisez une fonction vide
    const submitHandler = typeof onSubmit === 'function' ? onSubmit : () => {};

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Title level={3}>Reservation Form</Title>
            <Row gutter={16}>
                <Col span={12}>
                    <Input {...register("name")} placeholder="Name" />
                </Col>
                <Col span={12}>
                    <Input {...register("surname")} placeholder="Surname" />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Input {...register("date")} placeholder="Date" />
                </Col>
                <Col span={12}>
                    <Input {...register("time")} placeholder="Time" />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Input {...register("number")} placeholder="Number of people" />
                </Col>
            </Row>
            <Button type="primary" htmlType="submit">Add</Button>
        </form>
    );
}

export default ReservationForm;
