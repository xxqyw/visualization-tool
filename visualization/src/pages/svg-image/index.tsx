import React, {useEffect, useState} from 'react';
import { Node, Point } from '../../models/node';
import cloneDeep from 'lodash/cloneDeep';
import nodes, { paths } from '../../utils/testNodes';
import './index.css';
import { Button } from 'antd';

interface ArrowProps {
    start: number[];
    end: number[];
}
const initPoint: Point = {
    name: '',
    route: false
};
const initPointMap: any = [];

const Arrow = (props: ArrowProps) => {
    const {start, end} = props;
    return <>
        <defs>
        <marker id="arrow" markerWidth={10} markerHeight={10} refX={0} refY={2} orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,4 L4,2 z" fill="#000" />
        </marker>
    </defs>
    <line x1={(start[0]+1)*50} y1={(start[1]+1)*50} x2={(end[0]+1)*50} y2={(end[1]+1)*50} stroke="#000" stroke-width={2} marker-end="url(#arrow)" />
</>
}
export const SvgImage = (props: any) => {
    const [pointMap, setPointMap] = useState<any>([]);
    const [currentNodes, setCurrentNodes] = useState<number[]>([0]);

    const onCompleteAllSteps = () => {
        const tempVisitedNodes = [];
        for (let i = 0; i < paths.length; i++) {
            tempVisitedNodes.push(i);
        }
        setCurrentNodes(tempVisitedNodes);
    }
    const onNextStep = () => {
        const tempVisitedNodes = cloneDeep(currentNodes);
        tempVisitedNodes.push(tempVisitedNodes[tempVisitedNodes.length - 1] + 1);
        setCurrentNodes(tempVisitedNodes);
    }
    const onLastStep = () => {
        const tempVisitedNodes = cloneDeep(currentNodes);
        tempVisitedNodes.pop();
        setCurrentNodes(tempVisitedNodes);
    }
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
    return (<div>
        <div>
            <svg height={800} width={1000}>
                {pointMap.map((line: Point[], x: number) => {
                    return line.map((point: Point, y: number) => {
                        if (point.exist) {
                            const className = point.start ? 'black' : point.end ? 'wheat' : point.route ? 'green' : 'gray';
                            const key = x + '-' + y;
                            return <circle className={className} id={key} key={key} cx={(x+1)*50} cy={(y+1)*50} r={15}/>
                        }
                        return null;
                    })
                })}
                {currentNodes.map((index: number) => {
                    if (index) {
                        return <Arrow start={paths[index - 1]} end={paths[index]}></Arrow>
                    }
                    return null;
                })}
            </svg>
        </div>
        <div>
            <Button type="primary" onClick={onCompleteAllSteps}>一步完成</Button>
            <Button type="primary" onClick={onLastStep} disabled={currentNodes.length <= 1}>上一步</Button>
            <Button type="primary" onClick={onNextStep} disabled={currentNodes.length >= paths.length}>下一步</Button>
        </div>
    </div>);
}
export default SvgImage;