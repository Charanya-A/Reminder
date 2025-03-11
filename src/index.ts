
import { ReminderDatabase } from "./reminder";

const db = new ReminderDatabase();
db.createReminder(1, "Doctor's Appointment", new Date());

console.log(db.getAllReminders());


