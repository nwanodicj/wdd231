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
        div.textContent = course.code;
        div.classList.add("course-card");

        if (course.completed) {
            div.classList.add("completed");
        }

        container.appendChild(div);
    });

    // TOTAL CREDITS
    const total = courseList.reduce((sum, c) => sum + c.credits, 0);
    document.querySelector("#totalCredits").textContent = total;
}

/* FILTER BUTTONS */
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.type === "WDD"));
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.type === "CSE"));
});

/* INITIAL LOAD */
displayCourses(courses);