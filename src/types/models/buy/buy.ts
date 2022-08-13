type Item = {
    name: string;
    amount: number;
    price: number;
}

export interface Buy {
    name: string;
    items: Item[];
    total_price: number;
}