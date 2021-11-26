export interface Node extends Point {
    x: number;
    y: number;
}

export interface Point {
    name: string;
    route: boolean;
    details?: any;
    start?: boolean;
    end?: boolean;
    exist?: boolean;
}
export default Node;