document.querySelector('button').addEventListener("click", function(){
    axios.get('/name').then(function(res){
        alert("the name of your child is " + res.data + " hooray!")
    })
})