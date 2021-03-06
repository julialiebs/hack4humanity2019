// in managed apps:
import { Contacts } from 'expo';


const fn = async () => {
    const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
    });

    if (data.length > 0) {
        const contact = data[0];
        console.log(contact);
        return data;
    }

    return null;
}

//later change dummy to fn
export default fn;
