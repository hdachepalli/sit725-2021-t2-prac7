const cardList = [
    {
        title: "Location 1",
        image: "images/Location 1.jpg",
        link: "About Location 1",
        desciption: "Demo desciption about Location 1"
    },
    {
        title: "Location 2",
        image: "images/Location 2.jpg",
        link: "About Location 2",
        desciption: "Demo desciption about Location 2"
    }
]
const clickMe = () => {
    alert("Need to sign in to look at the application")
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#Email').val();
    formData.last_name = $('#Username').val();
    formData.password = $('#Password').val();
    formData.email = $('#confirm password').val();

    console.log("Form Data Submitted: ", formData);
}

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
    addCards(cardList);
    $('.modal').modal();
  });