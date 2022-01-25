import { Breadcrumb } from 'antd';
import React, {useEffect, useState} from 'react';
import SvgImage from '../../components/svg-image';
import { Link } from 'react-router-dom';
import './index.css';

export const RouteFindDetail = (props: any) => {
    
    return (<div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/V-T">可视化工具</Link></Breadcrumb.Item>
          <Breadcrumb.Item>路由详情</Breadcrumb.Item>
        </Breadcrumb>
        <div className='svg-box'>
        <SvgImage></SvgImage>
        </div>
    </div>);
}
export default RouteFindDetail;