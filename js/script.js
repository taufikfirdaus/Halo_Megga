let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Anjar Mega Dewi Ursila";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/kifuatambassador/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
    return "sarapan"
    break;
    case "Siang":
    return "makan siang"
    break;
    case "Malam":
    return "makan malam"
    break;
    case "Sore":
    return "makan"
    break;
    default:
    break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}




document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'halo mbak Megga :)',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('ada yang mau aku omongin nih').then((result) => {
        Swal.fire({
          title: ' ',
          html: `tapi aku malu ngomonginnya `,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `jadi pake ini aja hehe`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('gimana kabarmu ?').then((result) => {
                  Swal.fire(
                    'pasti sehat dong, masa engga',
                    '',
                    'success'
                    ).then((result) => {
                      Swal.fire(
                        'oh iya, . . .    :(',
                        '',
                        'error'
                        ).then((result) => {
                          Swal.fire('ada yang mau aku omongin nih').then((result) => {
                            Swal.fire({
                              title: 'Mau ga deket sama aku',
                              text: 'gimana mbak ?',
                              showDenyButton: true,
                              confirmButtonText: `Mau dong :)`,
                              denyButtonText: `maaf nih :(`,
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                Swal.fire({
                                  title: 'why ?',
                                  input: 'text',
                                  inputPlaceholder: 'ex: alassannya, or etc',
                                  showCancelButton: false,
                                  inputValidator: (value) => {
                                    if (!value) {
                                      return 'Isi dulu dong pliss'
                                    }
                                  }
                                }).then((result) => {
                                  Swal.fire('Okey Mbak Megga', 'Terimakasih, tulis di WA alasannya :)', 'success').then((result) => {
                                    Swal.fire("See ya! semoga jadi awal yang baik ^^").then((result) => {
                                      window.location.href="https://api.whatsapp.com/send?phone=6281556633473&text=Ya%20aku%20Mau%20Terima"
                                      selesai()
                                    });
                                  })
                                })
                              } else if (result.isDenied) {
                                Swal.fire('okedeh kalo ga mau :)','Chat WA ya :)','error').then((result) => {
                                  Swal.fire("See ya! mungkin belum waktunya ^^").then((result) => {
                                    window.location.href="https://api.whatsapp.com/send?phone=6281556633473&text=maaf%20aku%20nggabisa%20Terima"
                                    selesai()
                                  });
                                })
                              }
                            })
                          }) 
                        })
                        
                      })
                  })
              }
            })
          }
        })
      })
    }
  })
});


