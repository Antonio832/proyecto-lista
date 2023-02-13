export interface Lista{
    titulo: string,
    elementos?: Elemento[],
    docRef?: string,
    index: number
}

export interface Elemento{
    texto: string,
    tipo: string,
    color: string,
    checked?: boolean,
    prog?: number
}