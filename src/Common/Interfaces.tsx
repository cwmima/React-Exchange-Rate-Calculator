export interface IUserInput {
    BaseCurrency: string;
    // HistorialDate: string | null;
}

export interface IRates {
    [currencyCode: string]: number;
}
