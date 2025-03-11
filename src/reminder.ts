export class Reminder {
    id: number;
    title: string;
    date: Date;
  
    constructor(id: number, title: string, date: Date) {
      this.id = id;
      this.title = title;
      this.date = date;
    }
  }
  
export class ReminderDatabase {
    private reminders: Map<number, Reminder>;
  
    constructor() {
      this.reminders = new Map();
    }
  
    createReminder(id: number, title: string, date: Date): void {
      if (this.reminders.has(id)) {
        throw new Error("Reminder with this ID already exists.");
      }
      this.reminders.set(id, new Reminder(id, title, date));
    }
  
    exists(id: number): boolean {
      return this.reminders.has(id);
    }
  
    getAllReminders(): Reminder[] {
      return Array.from(this.reminders.values());
    }
  
    getReminder(id: number): Reminder | null {
      return this.reminders.get(id) || null;
    }
  
    removeReminder(id: number): boolean {
      return this.reminders.delete(id);
    }
  
    updateReminder(id: number, title?: string, date?: Date): boolean {
      if (!this.reminders.has(id)) {
        return false;
      }
      const existingReminder = this.reminders.get(id)!;
      this.reminders.set(id, new Reminder(id, title ?? existingReminder.title, date ?? existingReminder.date));
      return true;
    }
  }
  