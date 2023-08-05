import React from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, Row, Col, Typography, Form, Space } from 'antd';

const { Title } = Typography;

function ReservationForm({ onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = onSubmit ?? (() => {});

    return (
        <Space direction="vertical" size="large" style={{ 
            width: '70%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#333',
            padding: '20px',
            borderRadius: '15px',
            color: '#fff', // Make all text white
            margin: 'auto',
        }}>
            <Title level={3} style={{ textAlign: 'center', color: '#fff' }}>Formulaire de Réservation</Title>
            <Form onSubmit={handleSubmit(submitHandler)} style={{ maxWidth: '600px', width: '100%' }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={<span style={{ color: '#fff' }}>Nom</span>} validateStatus={errors.name ? 'error' : ''} help={errors.name && 'Ce champ est obligatoire'}>
                            <Input {...register("name", { required: true })} placeholder="Nom" style={{ color: '#fff' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span style={{ color: '#fff' }}>Prénom</span>} validateStatus={errors.surname ? 'error' : ''} help={errors.surname && 'Ce champ est obligatoire'}>
                            <Input {...register("surname", { required: true })} placeholder="Prénom" style={{ color: '#fff' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={<span style={{ color: '#fff' }}>Date</span>} validateStatus={errors.date ? 'error' : ''} help={errors.date && 'Ce champ est obligatoire'}>
                            <Input {...register("date", { required: true })} placeholder="Date" style={{ color: '#fff' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span style={{ color: '#fff' }}>Heure</span>} validateStatus={errors.time ? 'error' : ''} help={errors.time && 'Ce champ est obligatoire'}>
                            <Input {...register("time", { required: true })} placeholder="Heure" style={{ color: '#fff' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label={<span style={{ color: '#fff' }}>Nombre de personnes</span>} validateStatus={errors.number ? 'error' : ''} help={errors.number && 'Ce champ est obligatoire'}>
                            <Input {...register("number", { required: true })} placeholder="Nombre de personnes" style={{ color: '#fff' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" style={{ display: 'block', margin: '0 auto' }}>Ajouter</Button>
            </Form>
        </Space>
    );
}

export default ReservationForm;
