import {Collection, getModel} from '../../constant-definitions' 
import { BookingSchemaMongo } from '../../types/models/booking/booking-mong';

export const getBookingsByUser = async (id:string): Promise<any> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo)
    const bookings = await model.find({});

    let myBookings:any = []
    bookings.filter((cover:any) => cover.peoples.length > 0)
    .map((cover) => {
            cover.peoples.map((people:any) => {
                myBookings.push({ id: people._id, user: people.user, state: people.state, price: people.price, date:cover.date, hour: cover.hour, amount: people.amount, name: cover.name, description: cover.description, location: cover.location})
            })
    });

    const peoples = myBookings.filter((cover:any) => cover.user == id);

    return peoples;
}