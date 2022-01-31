const gradeACost = 6;
const gradeBCost = 4;
const gradeCCost = 2;

const eggsExpiredDay = [{
        date: '2021-01-10',
        cost: gradeACost
    }, {
        date: '2021-01-10',
        cost: gradeACost
    }, {
        date: '2021-01-10',
        cost: gradeACost
    },
    {
        date: '2021-01-10',
        cost: gradeBCost
    }, {
        date: '2022-03-10',
        cost: gradeBCost
    }, {
        date: '2022-03-10',
        cost: gradeBCost
    },
    {
        date: '2022-04-10',
        cost: gradeCCost
    }, {
        date: '2021-03-10',
        cost: gradeCCost
    }, {
        date: '2022-04-10',
        cost: gradeCCost
    }
];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

function checkExpiredEggs(expired) {
    const expiredEggs = eggsExpiredDay.filter(expired => expired.date < today).map((item) => item.cost);
    const sum = expiredEggs.reduce((partialSum, a) => partialSum + a, 0);
    return `Total loss: ${sum}`;
};

console.log(checkExpiredEggs()); // => Total loss: 24