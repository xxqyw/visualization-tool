import { Breadcrumb, Card } from 'antd';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const UploadPage = (props: any) => {
    
    return (<div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>V-T</Breadcrumb.Item>
        </Breadcrumb>
        <div className='upload-content'>
            <Card className='card' title="上传数据文件" style={{ width: '100%' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            <Link to="/V-T/route-find-detail">上传完成后查看路由结果</Link>
            </Card>
            <Card className='card' title="上传数据样例" style={{ width: '100%'}}>
                <pre style={{ width: '100%', height: '400px', overflow: 'auto' }}>
                    {`
            const nodes: Node[] = [
                {
                    name: 'test1',
                    route: false,
                    details: 'test1',
                    x: 0,
                    y: 5,
                    end: true
                },{
                    name: 'test2',
                    route: false,
                    details: 'test2',
                    x: 1,
                    y: 5
                },{
                    name: 'test3',
                    route: false,
                    details: 'test3',
                    x: 2,
                    y: 6
                },{
                    name: 'test4',
                    route: false,
                    details: 'test4',
                    x: 3,
                    y: 6
                },{
                    name: 'test5',
                    route: false,
                    details: 'test5',
                    x: 4,
                    y: 7
                },{
                    name: 'test6',
                    route: false,
                    details: 'test6',
                    x: 5,
                    y: 7,
                    start: true
                }
            ];
            export const paths = [[0, 5], [1, 5], [2, 6], [3, 6], [4, 7], [5, 7]];`}
                </pre>
            </Card>
        </div>
    </div>);
}
export default UploadPage;