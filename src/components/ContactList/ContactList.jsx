import { useDispatch, useSelector } from "react-redux";
import { List, Item, Contact, Number, Button } from "./ContactList.styled";
import { selectFilteredItems } from "../../redux/selectors";
import { deleteContactThunk } from "../../redux/contactsThunks";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredItems);
  
  const handleDelete = (id) => {
    dispatch(deleteContactThunk(id));
  }

  return (
    <List>
      {filteredContacts.map(({id, name, phone}) => {
        return (
          <Item key={id}>
            <Contact>{name}: <Number>{phone}</Number></Contact>
            <Button type="button" onClick={() => handleDelete(id)}>Delete</Button>
          </Item>
            )
      })}
      </List > 
  )
}

export default ContactList
