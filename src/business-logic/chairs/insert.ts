import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';
import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';
import { BookingSchemaMongo } from '../../types/models/booking/booking-mong';


export interface People{
    store: any,
    chair_id: any,
    date: string,
    hour: string,
    user: any,
    state: string,
    min_consumption: number,
    peoples: number,
}

export const InsertBooking = async (data: People): Promise<any> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo)
    const userModel = await getModel(Collection.USERS, UserSchemaMongo)

    console.log(data)

    const user = await userModel.findById(data.user);

    if(!user) {return Error(`User not found`)}
    const booking = new model({...data});

    await user.save();

    if(!booking){
        throw new Error("Error to create booking");
    }

    await booking.save();
    return true;
}