var score = 33;
score = 44;
score = "55";
score = false;
var paul = { name: "Paul", id: 344 };
paul = { username: "Paulliano", id: 392 };
// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string")
        id.toLowerCase();
    if (typeof id === "number")
        id + 2;
}
//array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = ["1", "2", "3", 4, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
