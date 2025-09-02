export interface CryptoPriceDTO {
    btcAud: number | null;
    ethAud: number | null;
}

export interface CryptoData {
    data: CryptoPriceDTO | null;
    loading: boolean;
    error: string | null;
}
