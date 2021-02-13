function bored(isFinal) {
    if(isFinal){
        document.getElementById('i-am-bored-btn').remove();
    }
    fetch('http://www.boredapi.com/api/activity/')
        .then(resp => resp.json())
        .then(data => {
            document.getElementById('activity').innerHTML = `
            <div class="alert alert-success mt-4" role="alert">
            <h5>You can do this:</h5> <p><b> ${data.activity} </b></p>
            <button class="btn btn-warning mt-3" onclick="bored(false)">I'm not interested.</button>
        </div>`;
        })
}



