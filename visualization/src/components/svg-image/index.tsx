import React, {useEffect, useState} from 'react';
import { Node, Point } from '../../models/node';
import cloneDeep from 'lodash/cloneDeep';
import nodes, { paths } from '../../testData/testNodes';
import './index.css';
import { Button, Modal } from 'antd';
import { getRealStartEnd } from '../../utils/math';

interface ArrowProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
interface DetailProps {
    visible: boolean;
    detail: any;
    title: string;
    onCancel: () => void;
}
const initPoint: Point = {
    name: '',
    route: false
};
const initPointMap: any = [];

const Arrow = (props: ArrowProps) => {
    const {x1, y1, x2, y2} = props;

    return <>
        <defs>
        <marker id="arrow" markerWidth={10} markerHeight={10} refX={0} refY={2} orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,4 L4,2 z" fill="#000" />
        </marker>
    </defs>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000" strokeWidth={2} markerEnd="url(#arrow)" />
</>
}
const Detail = (props: DetailProps) => {
    const {visible, detail, title, onCancel} = props;
    return <Modal title={title} visible={visible} footer={null} onCancel={onCancel} centered>{detail}</Modal>
}
export const SvgImage = (props: any) => {
    const [pointMap, setPointMap] = useState<any>([]);
    const [currentNodes, setCurrentNodes] = useState<number[]>([0]);
    const [visible, setVisible] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>('');
    const [title, setTitle] = useState<string>('');

    const onCompleteAllSteps = () => {
        const tempVisitedNodes = [];
        for (let i = 0; i < paths.length; i++) {
            pointMap[paths[i][0]][paths[i][1]].route = true;
            tempVisitedNodes.push(i);
        }
        setCurrentNodes(tempVisitedNodes);
    }
    const onNextStep = () => {
        const tempVisitedNodes = cloneDeep(currentNodes);
        tempVisitedNodes.push(tempVisitedNodes.length);
        pointMap[paths[tempVisitedNodes.length - 1][0]][paths[tempVisitedNodes.length - 1][1]].route = true;
        setCurrentNodes(tempVisitedNodes);
    }
    const onLastStep = () => {
        const tempVisitedNodes = cloneDeep(currentNodes);
        tempVisitedNodes.pop();
        pointMap[paths[tempVisitedNodes.length][0]][paths[tempVisitedNodes.length][1]].route = false;
        setCurrentNodes(tempVisitedNodes);
    }
    const onShowDetail = (x: number, y: number) => {
        setDetail(pointMap[x][y].details);
        setTitle(pointMap[x][y].name);
        setVisible(true);
    };

    useEffect(() => {
        for(let i=0;i<10;i++) {
            const temp = [];
            for(let j=0;j<10;j++) {
                temp.push(cloneDeep(initPoint));
            }
            initPointMap.push(temp);
        }
        nodes.map((node: Node) => {
            initPointMap[node.x][node.y] = {
                name: node.name,
                route: node.route,
                details: node.details,
                start: node.start,
                end: node.end,
                exist: true
            }
        });
        setPointMap(cloneDeep(initPointMap));
    }, []);

    return (<div style={{background: '#f0f2f5'}}>
        <div>
            <svg height={800} width={1000}>
                {pointMap.map((line: Point[], x: number) => {
                    return line.map((point: Point, y: number) => {
                        if (point.exist) {
                            const className = point.start ? 'black' : point.end ? 'wheat' : point.route ? 'green' : 'gray';
                            return <g key={point.name} onClick={() => onShowDetail(x, y)}>
                            <circle className={className} id={point.name} cx={(x+1)*50} cy={(y+1)*50} r={15}/>
                            <text className='red' x={(x+1)*50-8} y={(y+1)*50+4}>{point.name}</text>
                            </g>
                        }
                        return null;
                    })
                })}
                {currentNodes.map((index: number) => {
                    if (index) {
                        const keys = [...paths[index - 1], ...paths[index]];
                        const key = keys.join('-');
                        const realIndex = getRealStartEnd((paths[index - 1][0] + 1) * 50, (paths[index - 1][1] + 1) * 50, (paths[index][0] + 1) * 50, (paths[index][1] + 1) * 50, 15, 6);
                        return <Arrow key={key}
                        x1={realIndex.x1}
                        y1={realIndex.y1}
                        x2={realIndex.x2}
                        y2={realIndex.y2}
                        ></Arrow>
                    }
                    return null;
                })}
            </svg>
        </div>
        <div style={{background: '#fff', paddingTop: '16px', textAlign: 'center'}}>
            <Button type="primary" onClick={onCompleteAllSteps} style={{marginRight: 16}}>一步完成</Button>
            <Button type="primary" onClick={onLastStep} disabled={currentNodes.length <= 1} style={{marginRight: 16}}>上一步</Button>
            <Button type="primary" onClick={onNextStep} disabled={currentNodes.length >= paths.length}>下一步</Button>
        </div>
        <Detail visible={visible} title={title} detail={detail} onCancel={() => setVisible(false)} ></Detail>
    </div>);
}
export default SvgImage;