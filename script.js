//your code here
document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        "Who was the first female to become the governor of an Indian state?",
        "Who among the first women to climb Mount Everest twice?",
        "Who is the President of India?"
    ];

    const container = document.createElement("div"); 
    document.body.appendChild(container);

    questions.forEach(question => {
        const blockquote = document.createElement("blockquote");
        blockquote.classList.add("questions");

        const p = document.createElement("p");
        p.textContent = question;

        blockquote.appendChild(p);
        container.appendChild(blockquote);
    });
});
