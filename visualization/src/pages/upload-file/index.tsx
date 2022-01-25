import { Breadcrumb, Card } from 'antd';
import React, {useEffect, useState} from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css';

export const UploadPage = (props: any) => {
    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info: any) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    
    return (<div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>可视化工具</Breadcrumb.Item>
        </Breadcrumb>
        <div className='upload-content'>
            <Card className='card' title="上传数据文件" style={{ width: '100%' }}>
                <div className='upload-tip'>
                    <Upload {...uploadProps} className='upload-button'>
                        <Button icon={<UploadOutlined />}>上传数据文件</Button>
                    </Upload>
                    <Link to="/V-T/route-find-detail"><Button type='primary'>上传完成后查看路由结果</Button></Link>
                </div>
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