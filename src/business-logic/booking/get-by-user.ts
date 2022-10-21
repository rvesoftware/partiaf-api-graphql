import {Collection, getModel} from '../../constant-definitions' 
import { BookingSchemaMongo } from '../../types/models/booking/booking-mong';

export const getBookingsByUser = async (id:string): Promise<any> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo)
    const bookings = await model.find({});

    const peoples = bookings.filter((cover:any) => cover.user == id);

    return peoples;
}