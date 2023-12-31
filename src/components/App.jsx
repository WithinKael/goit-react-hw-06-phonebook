import React from 'react';
import { ContactsForm } from './ContactsForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { setFilter, addContact, deletePost } from 'redux/phoneBookReducer';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  const onInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const onAddContact = contact => {
    const isDuplicateName = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
  };

  const onDeletePost = postId => {
    dispatch(deletePost(postId));
  };

  const inputFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const contactsToInput = inputFilter();

  return (
    <div>
      <h1 className="titlePhoneBook">Phonebook</h1>
      <ContactsForm contacts={contacts} onAddContact={onAddContact} />

      <Filter filter={filter} onInputChange={onInputChange} />
      <ContactList contacts={contactsToInput} onDeletePost={onDeletePost} />
    </div>
  );
};
