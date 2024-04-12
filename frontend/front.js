let a = document.getElementById("inputvalue")
let b = document.getElementById("paratext")

function clicked() {
    const no = a.value;
    const url = 'http://localhost:3000/getAttendance/' + no;
    const options = {
        method: 'GET',
    }
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData)
            if (jsonData.length === 0) {
                b.textContent = "INVALID ROLL NUMBER";
            } else {
                const {
                    percentage
                } = jsonData[0];
                if (percentage === "DETAINED") {
                    b.textContent = "YOUR ARE DETAINED"
                } else {
                    b.textContent = "your attendance percentage is " + percentage;
                }
            }
        });

}
