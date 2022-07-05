window.addEventListener('load', () => {
    const o_prefix = localStorage.getItem("PREFIX");
    const o_fname = localStorage.getItem("FNAME");
    const o_mname = localStorage.getItem("MNAME");
    const o_lname = localStorage.getItem("LNAME");
    document.getElementById('prefix').innerHTML = o_prefix;
    document.getElementById('fname').innerHTML = o_fname;
    document.getElementById('mname').innerHTML = o_mname;
    document.getElementById('lname').innerHTML = o_lname;
})