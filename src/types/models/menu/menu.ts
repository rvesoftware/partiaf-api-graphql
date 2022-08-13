type MenuItem = {
    name: string,
    price: number,
    description: string,
    amount: number,
    image: string
}

export interface Menu{
    title: string;
    category: string;
    items: MenuItem[];
}