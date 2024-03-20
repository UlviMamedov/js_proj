const fileSystem = Object.freeze({
    name: "root",
    type: "folder",
    children: [
        {
            name: "folder1",
            type: "folder",
            children: [
                { name: "file1.txt", type: "file" },
                { name: "file2.txt", type: "file" }
            ]
        },
        {
            name: "folder2",
            type: "folder",
            children: [
                { name: "file3.txt", type: "file" }
            ]
        }
    ]
});

function getDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

function calculateAge(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function finalCountdown(futureDateStr) {
    const futureDate = new Date(futureDateStr);
    const currentDate = new Date();

    let timeDifference = futureDate - currentDate;
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = Math.floor(timeDifference / oneDay);
    timeDifference -= days * oneDay;
    const hours = Math.floor(timeDifference / oneHour);
    timeDifference -= hours * oneHour;
    const minutes = Math.floor(timeDifference / oneMinute);
    timeDifference -= minutes * oneMinute;
    const seconds = Math.floor(timeDifference / oneSecond);

    return { days, hours, minutes, seconds };
}

function getWorkingDays(deadline) {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    let workingDays = 0;
    while (currentDate < deadlineDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            workingDays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingDays;
}

console.log("Task I:");
console.log("Frozen file system:", fileSystem);

console.log("\nTask II:");
console.log("Days difference:", getDaysDifference("2024-03-12", "2024-03-20"));

console.log("\nTask III:");
console.log("Age:", calculateAge("2007-07-10"));

console.log("\nTask IV:");
console.log("Final countdown:", finalCountdown("2024-04-01"));

console.log("\nTask V:");
console.log("Working days until deadline:", getWorkingDays(new Date("2024-03-30")));