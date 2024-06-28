import React, { useState, useEffect, useCallback } from 'react';
import { Button, Form, Input, Card, message, Table } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_STRIPE_SECRET_KEY;
    const { id } = useParams();

    const columns = [
        {
            title: "Customer Email",
            dataIndex: "receipt_email",
        },
        {
            title: "Order Price",
            dataIndex: "amount",
            render: (record) => <b>${(record / 100).toFixed(2)}</b>,
        },
    ];

    const fetchUserInfo = useCallback(async () => {
        try {
            const response = await fetch(`${apiUrl}/api/users/${id}`);
            if (response.ok) {
                const data = await response.json();
                setUserInfo(data);
                if (data.role === 'admin') {
                    navigate('/admin/users');
                }
            } else {
                message.error('Failed to fetch user information');
            }
        } catch (error) {
            console.log('Failed to fetch user information:', error);
        }
    }, [apiUrl, navigate, id]);

    const fetchOrderHistory = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.stripe.com/v1/payment_intents`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
                    },
                }
            );

            if (response.ok) {
                const { data } = await response.json();
                const userOrders = data.filter(order => order.receipt_email === userInfo.email);
                console.log(userOrders)
                setDataSource(userOrders);
            } else {
                message.error("Something went wrong");
            }
        } catch (error) {
            console.log("Data Error: ", error);
            message.error("Failed to fetch order history");
        } finally {
            setLoading(false);
        }
    }, [MY_STRIPE_SECRET_KEY, userInfo.email]);

    const handleUpdateUserInfo = async (values) => {
        try {
            const { name, email, password } = values;
            const updatedUserData = {
                username: name,
                email,
                password,
            };

            const response = await fetch(`${apiUrl}/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUserInfo(updatedUser);
                message.success('User information updated successfully');
            } else {
                message.error('Failed to update user information');
            }
        } catch (error) {
            console.log('Failed to update user information:', error);
            message.error('Failed to update user information');
        }
    };

    useEffect(() => {
        fetchUserInfo();
        fetchOrderHistory();
    }, [fetchUserInfo, fetchOrderHistory]);

    const orderColumns = [
        {
            title: 'Order ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (record) => <b>${(record / 100).toFixed(2)}</b>,
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Card title="User Profile" style={{ marginBottom: '20px' }}>
                <Form
                    initialValues={userInfo}
                    onFinish={handleUpdateUserInfo}
                >
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title="Order History">
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    rowKey={(record) => record.id}
                    loading={loading}
                />
            </Card>
        </div>
    );
};

export default UserProfile;
