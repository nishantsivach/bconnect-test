export type NumberSchema = {
    enabled: boolean,
    SID: string,
    authToken: string,
    phoneNumbers: ListSchema[]
}

export type ListSchema = {
    countryCode: string,
    phoneNumber: number,
    whatsapp: boolean,
    sms: boolean,
    delay: number,
    onlineMessage: string,
    offlineMessage: string,
    flag?: string
}