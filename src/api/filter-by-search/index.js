export const filterBySearch = (mails, searchInputProp, type) => {
    return mails.filter(mail => {
        const searchInput = searchInputProp.toLowerCase();
        const subject = mail.subject.toLowerCase();
        const message = mail.message.toLowerCase();
        const mailFrom = mail[type ? type : 'from'].toLowerCase();

        return subject.indexOf(searchInput) >= 0 ||
            message.indexOf(searchInput) >= 0 ||
            mailFrom.indexOf(searchInput) >= 0;
    });
};
