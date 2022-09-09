import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';
import {v4 as uuidv4} from 'uuid';

export const getCoversByUser = async (id:string): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const covers = await model.find({});

    let myCovers:any = []
    covers.filter((cover:any) => cover.peoples.length > 0)
    .map((cover) => {
        const coverName = cover.name;
        const uuid = new Date().toString() + Math.random(); 
            cover.peoples.map((people:any) => {
                myCovers.push({ uuid: uuid, user: people.user, state: people.state, price: people.price, date:cover.date, hour: cover.hour, amount: people.amount, name: coverName, description: cover.description, location: cover.location})
            })
    });

    const peoples = myCovers.filter((cover:any) => cover.user == id);

    return peoples;
}