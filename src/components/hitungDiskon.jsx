import React, {useState} from "react";

const HitungDiskon = () => {
    const [hargaTotalPembelian, setHargaTotalPembelian] = useState(0);
    const [nama, setNama] = useState('');
    const [panjangNama, setPanjangNama] = useState(0);
    const [total, setTotal] = useState(0);
    const [diskon, setDiskon] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nama);
        // menghapus spasi dari nama untuk menghitung jumlah huruf
        const namaTanpaSpasi = nama.replace(/\s/g, '');
        const panjangNamaBaru = namaTanpaSpasi.length;

        
        setDiskon(diskon);
        //Mengupdate State
        console.log(panjangNamaBaru);
        if (panjangNamaBaru > 100) {
            setPanjangNama(100);
            const diskon = 100 / 100;
            setDiskon(diskon);
        }else{
            setPanjangNama(panjangNamaBaru);
            const diskon = panjangNama / 100;
            setDiskon(diskon);
        }
        

        console.log("Test")
        const hargaTotalPembelianNum = parseFloat(hargaTotalPembelian);
        console.log(hargaTotalPembelianNum);
        const totalBaru = hargaTotalPembelianNum - (hargaTotalPembelianNum * diskon);
        setTotal(totalBaru);
    };
    

    return (
        <div style={{ margin: '50px auto', textAlign: 'center'}}>
            <h2>Program Diskon Berdasarkan Panjang Nama</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Masukkan Nama:
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} style={{marginLeft: '10px'}} />
                </label>
                <br />
                <label>
                    Masukkan Harga Total Pembelian:
                    <input
                        type="number"
                        value={hargaTotalPembelian}
                        onChange={(e) => setHargaTotalPembelian(e.target.value)}
                        style={{ marginLeft: '10px' }}
                        required
                    />
                </label>
                <br />
                <button type="submit" style={{marginTop: '10px'}}>Hitung</button>
            </form>
            <div style={{marginTop: '20px'}}>
                <p>Jumlah Kata: {panjangNama}</p>
                <p><strong></strong>Total Diskon: {panjangNama}%</p>
                <p><strong></strong>Harga Setelah Diskon: {total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
            </div>
        </div>
    );
};

export default HitungDiskon;