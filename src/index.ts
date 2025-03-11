/*import { ReminderDatabase } from "./reminder"; // Import from single file

const reminderDB = new ReminderDatabase();

reminderDB.createReminder("1", "Doctor Appointment", "2025-03-15");
reminderDB.createReminder("2", "Team Meeting", "2025-03-20");
reminderDB.createReminder("2", "Hang Over", "2025-03-22");
reminderDB.createReminder("3", "Team Meeting", "2025-03-20");
reminderDB.createReminder("2", "Team Meeting", "2025-03-21");

console.log("All Reminders:", reminderDB.getAllReminders());

reminderDB.markReminderAsCompleted("2");
console.log("Completed Reminders:", reminderDB.getAllRemindersMarkedAsCompleted());

reminderDB.markReminderAsCompleted("2");
console.log("Not Completed Reminders:", reminderDB.getAllRemindersNotMarkedAsCompleted());

reminderDB.unmarkReminderAsCompleted("2");
console.log("UnCompleted Reminders:", reminderDB.getAllRemindersNotMarkedAsCompleted());


reminderDB.updateReminder("3", "Updated Meeting", "2025-03-22");
console.log("Updated Reminder 4:", reminderDB.getReminder("4"));

reminderDB.removeReminder("2");
console.log("All Reminders after deletion:", reminderDB.getAllReminders());*/





import * as readline from "readline";
import { ReminderDatabase } from "./reminder";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const reminderDB = new ReminderDatabase();

function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  while (true) {
    console.log("\n1. Create Reminder");
    console.log("2. View All Reminders");
    console.log("3. Mark Reminder as Completed");
    console.log("4. Unmark Reminder as Completed");
    console.log("5. Update Reminder");
    console.log("6. Remove Reminder");
    console.log("7. Exit");

    const choice = await askQuestion("Select an option: ");

    switch (choice) {
      case "1":
        const id = await askQuestion("Enter Reminder ID: ");
        const title = await askQuestion("Enter Reminder Title: ");
        const date = await askQuestion("Enter Due Date (YYYY-MM-DD): ");
        reminderDB.createReminder(id, title, date);
        console.log("Reminder added successfully!");
        break;

      case "2":
        console.log("All Reminders:", reminderDB.getAllReminders());
        break;

      case "3":
        const markId = await askQuestion("Enter Reminder ID to mark as completed: ");
        reminderDB.markReminderAsCompleted(markId);
        console.log("Reminder marked as completed!");
        break;

      case "4":
        const unmarkId = await askQuestion("Enter Reminder ID to unmark as completed: ");
        reminderDB.unmarkReminderAsCompleted(unmarkId);
        console.log("Reminder unmarked as completed!");
        break;

      case "5":
        const updateId = await askQuestion("Enter Reminder ID to update: ");
        const newTitle = await askQuestion("Enter New Title: ");
        const newDate = await askQuestion("Enter New Due Date (YYYY-MM-DD): ");
        reminderDB.updateReminder(updateId, newTitle, newDate);
        console.log("Reminder updated successfully!");
        break;

      case "6":
        const removeId = await askQuestion("Enter Reminder ID to delete: ");
        reminderDB.removeReminder(removeId);
        console.log("Reminder deleted!");
        break;

      case "7":
        console.log("Exiting...");
        rl.close();
        return;

      default:
        console.log("Invalid option. Please try again.");
    }
  }
}

main();