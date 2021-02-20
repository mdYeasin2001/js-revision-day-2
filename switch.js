let money = 100;
money = 10;
money = 50;
money = 100;
switch (money) {
    case 10:
    case 20:
        console.log("poor");
        break;
    case 50: 
        console.log("middle class");
        break;
    case 100:
        console.log("rich");
        break;

    default:
        console.log("don't know about financial condition");
        break;
}