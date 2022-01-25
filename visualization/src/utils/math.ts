export const getRealStartEnd = (x1: number, y1: number, x2: number, y2: number, r: number, arrowLength: number) => {
    const res = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    };
    const pointDistanceSquare = ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2));
    const k = (y2 - y1) / (x2 - x1);
    const b = y1 - (k * x1);
    const movedStartSquare = (r * r) / (1 + (k * k));
    const movedEndSquare = ((r + arrowLength) * (r + arrowLength)) / (1 + (k * k));
    const x10 = Math.sqrt(movedStartSquare) + x1;
    const y10 = x10 * k + b;
    const x11 = (0 - Math.sqrt(movedStartSquare)) + x1;
    const y11 = x11 * k + b;
    const x20 = Math.sqrt(movedEndSquare) + x2;
    const y20 = x20 * k + b;
    const x21 = (0 - Math.sqrt(movedEndSquare)) + x2;
    const y21 = x21 * k + b;
    if ((((x10 - x2) * (x10 - x2)) + ((y10 - y2) * (y10 - y2))) > pointDistanceSquare) {
        res.x1 = x11;
        res.y1 = y11;
    } else {
        res.x1 = x10;
        res.y1 = y10;
    }
    if ((((x20 - x1) * (x20 - x1)) + ((y20 - y1) * (y20 - y1))) > pointDistanceSquare) {
        res.x2 = x21;
        res.y2 = y21;
    } else {
        res.x2 = x20;
        res.y2 = y20;
    }
    return res;
}