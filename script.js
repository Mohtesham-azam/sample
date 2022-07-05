function handleSubmit(){
    const prefix = document.getElementById('prefix').value;
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    localStorage.setItem("PREFIX", prefix);
    localStorage.setItem("FNAME", fname);
    localStorage.setItem("MNAME", mname);
    localStorage.setItem("LNAME", lname);
}