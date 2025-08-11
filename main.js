const tugma = document.getElementById("tugma");
const tugilganKuni = document.getElementById("tugilganKuni");
const natija = document.getElementById("natija");

function yoshHisobla() {
  const tugilganKuniQiymat = tugilganKuni.value;
  if (tugilganKuniQiymat == "") {
    alert("Iltimos, tug‘ilgan kuningizni kiriting");
  } else {
    const yosh = yoshOlish(tugilganKuniQiymat);
    natija.innerText = `Sizning yoshingiz ${yosh} ${yosh > 1 ? "yosh" : "yosh"}da`;
  }
}

function yoshOlish(tugilganKuniQiymat) {
  const hozirgiSana = new Date();
  const tugilganSana = new Date(tugilganKuniQiymat);
  let yosh = hozirgiSana.getFullYear() - tugilganSana.getFullYear();
  const oy = hozirgiSana.getMonth() - tugilganSana.getMonth();

  if (
    oy < 0 ||
    (oy === 0 && hozirgiSana.getDate() < tugilganSana.getDate())
  ) {
    yosh--;
  }

  return yosh;
}

tugma.addEventListener("click", yoshHisobla);