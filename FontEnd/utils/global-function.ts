export function hidePartialPhone(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') **** ' + phone.slice(7, 10);
    return newFormat;
}

export function hidePartialId(id: string) {
    if (id.length <= 0) return id;
    let newFormat = id.slice(0, 3) + ' ******* ' + id.slice(id.length - 4, id.length);
    return newFormat;
}

export function formatPhoneNumber(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 7) + ' - ' + phone.slice(7, 10);
    return newFormat;
}

export function formatVND(amount: any) {
    if (amount.length <= 0) return;
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function formatStringToCardNum(cardString: string) {
    if (cardString.length <= 0) return;
    return (
        cardString.slice(0, 4) +
        ' ' +
        cardString.slice(4, 8) +
        ' ' +
        cardString.slice(8, 12) +
        ' ' +
        cardString.slice(12, 16)
    );
}
