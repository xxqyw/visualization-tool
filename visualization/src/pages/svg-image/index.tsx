import React, {useEffect, useState} from 'react';
import { Node, Point } from '../../models/node';
import cloneDeep from 'lodash/cloneDeep';
import nodes from '../../utils/testNodes';
import './index.css';

const initPoint: Point = {
    name: '',
    route: false
};
const initPointMap: any = [];

export const SvgImage = (props: any) => {
    const [pointMap, setPointMap] = useState<any>([]);
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
                end: node.end
            }
        });
        setPointMap(cloneDeep(initPointMap));
    }, []);
    return (<div>
        <svg height={1000} width={1000}>
            {pointMap.map((line: Point[], x: number) => {
                return line.map((point: Point, y: number) => {
                    const className = point.start ? 'black' : point.end ? 'wheat' : point.route ? 'green' : 'gray';
                    const key = x + '-' + y;
                    return <circle className={className} id={key} key={key} cx={(x+1)*50} cy={(y+1)*50} r={15}/>
                })
            })}
        </svg>
    </div>);
}
export default SvgImage;