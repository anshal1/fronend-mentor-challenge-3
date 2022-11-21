const card = document.getElementById("card");
const graph = [];
const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]
class box {
    constructor({ height, color, text }) {
        this.height = height;
        this.color = color;
        this.text = text;
    }
    create() {
        const ele = document.createElement("div");
        ele.setAttribute("class", "graph");
        const days = document.createElement("span");
        days.setAttribute("class", "days")
        const days_text = document.createTextNode(this.text);
        days.appendChild(days_text);
        ele.appendChild(days);
        const tooltip = document.createElement("span");
        const tooltip_text = document.createTextNode(this.height);
        tooltip.appendChild(tooltip_text);
        tooltip.setAttribute("class", "tooltip");
        ele.appendChild(tooltip)
        ele.style.height = (this.height / 5) + "rem";
        ele.style.background = this.color;
        card.appendChild(ele);
    }
}
data.forEach((d) => {
    graph.push(new box({
        height: d.amount,
        color: `${d.amount > 40 ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
            }`,
        text: d.day
    }))
})

graph.forEach((g) => {
    g.create();
})
const days = document.querySelectorAll(".days")
days[0].scrollIntoView({ behavior: "smooth" })