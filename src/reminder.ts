export class Reminder {
  id: string;
  title: string;
  date: string;
  completed: boolean;

  constructor(id: string, title: string, date: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.completed = false; // Default: not completed
  }
}

export class ReminderDatabase {
  private reminders: Reminder[] = [];

  createReminder(id: string, title: string, date: string): void {
    if (this.exists(id)) {
      console.log(`ID ${id} already exists with the title: ${title}.`);
      return;
    }
    this.reminders.push(new Reminder(id, title, date));
  }

  exists(id: string): boolean {
    return this.reminders.some(reminder => reminder.id === id);
  }

  markReminderAsCompleted(id: string): void {
    const reminder = this.getReminder(id);
    if (reminder) {
      reminder.completed = true;
    } else {
      console.log("Reminder not found.");
    }
  }

  unmarkReminderAsCompleted(id: string): void {
    const reminder = this.getReminder(id);
    if (reminder) {
      reminder.completed = false;
    } else {
      console.log("Reminder not found.");
    }
  }

  getAllReminders(): Reminder[] {
    return this.reminders;
  }

  getReminder(id: string): Reminder | null {
    return this.reminders.find(reminder => reminder.id === id) || null;
  }

  getAllRemindersMarkedAsCompleted(): Reminder[] {
    return this.reminders.filter(reminder => reminder.completed);
  }

  getAllRemindersNotMarkedAsCompleted(): Reminder[] {
    return this.reminders.filter(reminder => !reminder.completed);
  }

  getAllRemindersDueByToday(): Reminder[] {
    const today = new Date().toISOString().split('T')[0];
    return this.reminders.filter(reminder => reminder.date === today);
  }

  updateReminder(id: string, title: string, date: string): void {
    const reminder = this.getReminder(id);
    if (reminder) {
      reminder.title = title;
      reminder.date = date;
    } else {
      console.log("Reminder not found.");
    }
  }

  removeReminder(id: string): void {
    this.reminders = this.reminders.filter(reminder => reminder.id !== id);
  }
}