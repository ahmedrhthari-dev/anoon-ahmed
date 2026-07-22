const form = document.getElementById("userform");
let resultBox = document.getElementById("resultBox");
form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = document.getElementById("name").value

    const email = document.getElementById("email").value

    const birthDate = document.getElementById("birthDate").value

    console.log(birthDate);


    const birth = new Date(birthDate);
    const today = new Date();
    const diff = today - birth;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
            today.getDate() < birth.getDate())
    ) {
        age--;
    }

    console.log(age);

    const months = age * 12;
    const hours = days * 24;
    resultBox.style.display = "block";
    if (age < 10) {
        resultBox.innerHTML = `
    <h2>مرحبا ${name}</h2>
    <p>العمر ${age} سنة</p>
   <p>ادخال رقم ولي الامر/p>
    `;
    }
    else if (age >= 10 && age <= 20) {
        resultBox.innerHTML = `
    <h2>مرحبا ${name}</h2>
    <p>البريد الالكتروني: ${email}</p>
    
    <h3>بيانات العمر</h3>
    <p>العمر بالسنوات:${age}</p>
    <p>العمر بالشهور:${months}</p>
    <p>العمر بالايام:${days}</p>
    <p>العمر بالساعات:${hours}</p>
    `;
    }
    else {
        resultBox.innerHTML = `
    <h2>مرحبا ${name}</h2>
   <p>العمرت:${age} سنة</p>
   <p>عليك البدء بعدم ضياع الوقت وإهداره</p>  `;

    }
});