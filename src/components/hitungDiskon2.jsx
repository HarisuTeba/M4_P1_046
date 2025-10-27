import React, { useState } from "react";


const HitungDiskon2 = () => {
    const [hargaTotalPembelian, setHargaTotalPembelian] = useState(0);
    const [nama, setNama] = useState('');
    const [jumlahVokal, setJumlahVokal] = useState(0);
    const [total, setTotal] = useState(0);
    const [diskon, setDiskon] = useState(0);

    const hitungVokal = (str) => {
        const vokal = str.match(/[aiueoAIUEO]/g);
        return vokal ? vokal.length : 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const namaTanpaSpasi = nama.replace(/\s/g, '');
        const jumlahVokalBaru = hitungVokal(namaTanpaSpasi);

        setJumlahVokal(jumlahVokalBaru);

        // Diskon = jumlah huruf vokal / 100 (maksimal 100%)
        const diskonPersen = Math.min(jumlahVokalBaru, 100);
        const diskonNilai = diskonPersen / 100;
        setDiskon(diskonPersen);

        const hargaTotalPembelianNum = parseFloat(hargaTotalPembelian);
        const totalBaru = hargaTotalPembelianNum - (hargaTotalPembelianNum * diskonNilai);
        setTotal(totalBaru);
    };

    return (
        <div style={{ margin: '50px auto', textAlign: 'center' }}>
            <h2>Program Diskon Berdasarkan Jumlah Huruf Vokal pada Nama</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Masukkan Nama:
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} style={{ marginLeft: '10px' }} />
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
                <button type="submit" style={{ marginTop: '10px' }}>Hitung</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <p>Jumlah Huruf Vokal: {jumlahVokal}</p>
                <p><strong></strong>Total Diskon: {diskon}%</p>
                <p><strong></strong>Harga Setelah Diskon: {total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
            </div>
        </div>
    );
};

export default HitungDiskon2;
