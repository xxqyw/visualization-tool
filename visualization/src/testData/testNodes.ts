import Node from "../models/node";

const nodes: Node[] = [
    {
        name: 't1',
        route: false,
        details: 't1',
        x: 0,
        y: 5,
        end: true
    },{
        name: 't2',
        route: false,
        details: 't2',
        x: 1,
        y: 5
    },{
        name: 't3',
        route: false,
        details: 't3',
        x: 2,
        y: 6
    },{
        name: 't4',
        route: false,
        details: 't4',
        x: 3,
        y: 6
    },{
        name: 't5',
        route: false,
        details: 't5',
        x: 4,
        y: 7
    },{
        name: 't6',
        route: false,
        details: 't6',
        x: 5,
        y: 7,
        start: true
    }
];
export const paths = [[0, 5], [1, 5], [2, 6], [3, 6], [4, 7], [5, 7]];
export default nodes;