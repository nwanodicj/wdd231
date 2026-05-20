const courses = [
    { code: "WDD 130", credits: 2, completed: true, type: "WDD" },
    { code: "WDD 131", credits: 2, completed: true, type: "WDD" },
    { code: "WDD 231", credits: 2, completed: false, type: "WDD" },
    { code: "CSE 110", credits: 2, completed: true, type: "CSE" },
    { code: "CSE 111", credits: 2, completed: false, type: "CSE" }
];

const container = document.querySelector(".courses-container");

function displayCourses(courseList) {
    container.innerHTML = "";

    courseList.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course-card");

        div.innerHTML = `
            <strong>${course.code}</strong> - ${course.credits} credits
        `;

        if (course.completed) {
            div.classList.add("completed");
        }

        container.appendChild(div);
    });

    const total = courseList.reduce((sum, c) => sum + c.credits, 0);
    document.querySelector("#totalCredits").textContent = total;
}

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.type === "WDD"));
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.type === "CSE"));
});

displayCourses(courses);