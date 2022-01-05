// fungsi untuk menampilkan data
function tampilSemuaData() {
    // method JQuery untuk menyingkat method $.ajax
    $.getJSON('data/pizza.json', function(data) {
        // untuk mengambil data dari dalam file json dan mengabaikan nama objeknya
        let menu = data.menu
            // salah satu perulangan pada javascript
        $.each(menu, function(i, data) {
            // menambahkan sebuah elemen baru di akhir
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>')
        })
    })
}

tampilSemuaData()

// membuat menu aktif
$('.nav-link').on('click', function() {
    // menghapus class aktif
    $('.nav-link').removeClass('active')
        // menambahkan class aktif
    $(this).addClass('active')

    // menampilkan judul sesuai dengan menu yang diklik
    let kategori = $(this).html()
    $('h1').html(kategori)

    // halaman default
    if (kategori == 'All Menu') {
        tampilSemuaData()
        return
    }

    // menampilkan data berdasarkan menu yang dipilih
    $.getJSON('data/pizza.json', function(data) {
        // mengambil data dari dalam file json dan mengabaikan nama objeknya
        let menu = data.menu
            // menginisialisasikan variabel content untuk menampilkan data nantinya
        let content = ''

        // salah satu perulangan pada javascript
        $.each(menu, function(i, data) {
            // menampilkan data berdasarkan kategori pada menu di navbar
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>'
            }
        })

        // menampilkan datanya ke dalam halaman
        $('#daftar-menu').html(content)
    })
})