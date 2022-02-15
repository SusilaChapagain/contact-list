const listElement = document.querySelector("#list")
const apiurl = "https://randomuser.me/api/?"

const fetchUsers = (params = "results=20")=>{
fetch(apiurl+params)
.then(Response=>Response.json())
.then(data => {
console.log(data);
const user = data.results;
    let str ="";
    
    user.map(usr=>{
        console.log(usr);
    str +=
   
    `<div class="col-md-6 col-lg-3 py-3 ">
    <div class="card">
        <img src="${usr.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">
          ${usr.name.title}
          ${usr.name.first}
          ${usr.name.last}
          </h5>
          
          <p class="card-text">
          <ul class="list-unstyled">
          <li> 
           <i class="fa-solid fa-phone text-center pt-3 mb-2"> </i>  ${usr.phone}</li>
          <li>
           <i class="fa-solid fa-envelope text-center pt-3 mb-2"></i>${usr.email}</li>
          <li>
          <i class="fa-solid fa-calendar-check text-center pt-3 mb-2"></i> ${usr.dob.date}</li>
          <li> 
           <i class="fa-solid fa-location-dot text-center pt-3 mb-2"></i> ${usr.location.city}</li>
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
      </div>`
});

listElement.innerHTML =str;
});
}
fetchUsers();

const handleOnChange = e =>{
    console.log(e.value);
    const params = "results=20&gender=" + e.value;
    fetchUsers(params);
};
// gender