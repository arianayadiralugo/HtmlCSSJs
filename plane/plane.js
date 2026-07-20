let seats = [
    {seatNumber: 1, available: true},
    {seatNumber: 2, available: true},
    {seatNumber: 3, available: false},
    {seatNumber: 4, available: true},
    {seatNumber: 5, available: true},
    {seatNumber: 6, available: false},
    {seatNumber: 7, available: true},
    {seatNumber: 8, available: true},
    {seatNumber: 9, available: false},
    {seatNumber: 10, available: false}
];

seats.map((seat, index) => {
    if (seat.seatNumber % 2 === 0) {
        document.writeln(`<div id=${seat.seatNumber}>${seat.seatNumber}</div><br>`)
        if(!seat.available){
            let div = document.getElementById(seat.seatNumber);
            div.style.backgroundColor = 'red';
        }
    } else {
        document.writeln(`<div id=${seat.seatNumber}>${seat.seatNumber}</div>`)
        if(!seat.available){
            let div = document.getElementById(seat.seatNumber);
            div.style.backgroundColor = 'red';
        }
    }
});