import Node from "../models/node";

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
export default nodes;