const cardList = [

]
const clickMe = () => {
    alert("Need to sign in to look at the application")
}
const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Twelveapostles": null,
        "sydney": null,
        
    }
});

const addLocationToApp = (location) => {
    $.ajax({
        url: 'api/locations',
        data: location,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    })
}

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ", formData);
    addLocationToApp(formData);
}

const getLocations = () => {
    $.get('/api/location',(response) => {
        if(response.statusCode==200){
            console.log(response)
            addCards(response.data); 
        }
    })
}

let socket = io();

socket.on('number', (msg) => {
    console.log('Random number:' + msg);
})

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getLocations();
    $('.modal').modal();
  });