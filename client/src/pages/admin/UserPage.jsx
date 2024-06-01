import React, { useState, useEffect } from 'react';
import { Button, Popconfirm, Table, message } from 'antd';
import { useCallback } from 'react';

const AdminUserPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Popconfirm
                    title='Delete this user'
                    description='Are you sure to delete this user?'
                    okText='Yes'
                    cancelText='No'
                    onConfirm={() => { deleteUser(record._id) }}
                >
                    <Button type='primary' danger>Sil</Button>
                </Popconfirm>
            )
        }
    ];

    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`${apiUrl}/api/users/${userId}`,{
                method: 'DELETE',
            });
            if (response.ok) {
                message.success('Deletion Succes!');
                fetchUsers();
            } else {
                message.error("Deletion Failed!");
            }
        } catch (error) {
            console.log("Deletion Fail:", error);
        } finally {
            setLoading(false);
        }
    }

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/api/users`);
            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            } else {
                message.error("Data Error!");
            }
        } catch (error) {
            console.log("Data Error:", error);
        } finally {
            setLoading(false);
        }
    }, [apiUrl]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey={(record) => record._id}
                loading={loading}
            />
        </>
    );
};

export default AdminUserPage;
