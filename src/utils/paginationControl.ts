interface PaginationControlPropTypes {
    total: number;
    current: number;
}

export default function paginationControl({
    total,
    current,
}: PaginationControlPropTypes) {
    const depth = 3;

    const pages = [];

    for (let i = 1; i <= total; i++) {
        pages.push(i);
    }

    let startIndex = current - depth - 1;

    if (startIndex < 0) {
        startIndex = 0;
    }

    const endIndex = current + depth;

    const pagination = pages.slice(startIndex, endIndex);

    return pagination;
}
