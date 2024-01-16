import React from 'react'
import {Table} from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = new Array(20).fill(1).map((_, index) => ({
    key: `key-${index}`,
    name: `John Brown-$(index)`,
    money: `￥300,000.00-$(index)`,
    address: `New York No. 1 Lake Park-$(index)`,

}));

export default function Hello() {
    return <div>
        <Table
            style={{width: 600}}
            scroll={{x: 800, y: '50vh'}}
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
            footer={() => 'Footer'}
        />
    </div>
};
