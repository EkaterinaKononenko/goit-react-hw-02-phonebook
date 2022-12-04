import React, { Component } from 'react';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container, PhoneTitle, ContactTitle, IconWrapper } from './App.styled';
import { AiOutlineApple } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = data => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === data.name)
        ? alert(`${data.name} is already in contacts`)
        : { contacts: [data, ...contacts] }
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const contactAfterFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <IconWrapper>
          <PhoneTitle>Phonebook</PhoneTitle>
          <AiOutlineApple color="#D71868" fontSize="3em" />
        </IconWrapper>
        <ContactForm onSubmit={this.addContact} />
        <IconWrapper>
          <ContactTitle>Contacts</ContactTitle>
          <AiOutlineUsergroupAdd color="#D71868" fontSize="3em" />
        </IconWrapper>
        <Filter value={filter} onFilter={this.onFilter} />
        <ContactList
          contacts={contactAfterFilter}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export { App };
