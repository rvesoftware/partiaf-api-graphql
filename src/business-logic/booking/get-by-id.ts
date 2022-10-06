import {Collection, getModel} from '../../constant-definitions' 
import { BookingSchemaMongo } from '../../types/models/booking/booking-mong';
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';

export const getBookingById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo)
    const covers = await model.find({store: id});
    return covers;
}