import { Radio, Space, Table } from 'antd';
import React, { useState } from 'react';

const columns = [
    {
        title: 'Name Long Text Long Text',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Cash Assets Long Text Long Text',
        className: 'column-money',
        dataIndex: 'money',
    },
    {
        title: 'Address Long Text Long Text',
        dataIndex: 'address',
    },
    {
        title: 'Address2 Long Text Long Text Long Text',
        dataIndex: 'address',
    },
    {
        title: 'Address3 Long Text Long Text Long Text',
        dataIndex: 'address',
    },
];

const data = new Array(20).fill(1).map((_, index) => ({
    key: `key-${index}`,
    name: `John Brown-${index}`,
    money: `￥300,000.00-${index}`,
    address: `New York No. 1 Lake Park-${index}`,
}));

export default function Hello() {
    const [scrollX, setScrollX] = useState<any>();
    const [scrollY, setScrollY] = useState<any>();


    return <Space direction='vertical'>
        <Space direction='vertical' >
            <div>
                ScrollX: <Radio.Group onChange={v => setScrollX(v.target.value)} value={scrollX}>
                    <Radio value={200}>200</Radio>
                    <Radio value={"200px"}>200px</Radio>
                    <Radio value={"10000px"}>10000px</Radio>
                    <Radio value={"50%"}>50%</Radio>
                    <Radio value={"50vw"}>50vw</Radio>
                    <Radio value={true}>true</Radio>
                    <Radio value={"max-content"}>max-content</Radio>
                    <Radio value={undefined}>Unset</Radio>
                </Radio.Group>
            </div>
            <div>
                ScrollY: <Radio.Group onChange={v => setScrollY(v.target.value)} value={scrollY}>
                    <Radio value={200}>200</Radio>
                    <Radio value={"200px"}>200px</Radio>
                    <Radio value={"10000px"}>10000px</Radio>
                    <Radio value={"50%"}>50%</Radio>
                    <Radio value={"50vh"}>50vh</Radio>
                    <Radio value={undefined}>Unset</Radio>
                </Radio.Group>
            </div>
        </Space>
        <Table
            style={{ width: 600 }}
            scroll={{ x: scrollX, y: scrollY }}
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
            footer={() => 'Footer'}
        />
    </Space>
};
