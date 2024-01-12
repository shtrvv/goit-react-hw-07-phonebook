import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import { useDispatch, useSelector } from "react-redux"
import Notification from "./Notification/Notification"
import { selectError, selectIsLoading, selectItems } from "../redux/selectors"
import { useEffect } from "react"
import { fetchContactsThunk } from "../redux/contactsThunks"
import { ColorRing } from "react-loader-spinner"
import Section from "./Section/Section"

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch])

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>  
      <Section title={'Contacts'}>
      <Filter />
      {contacts?.length ?
      <ContactList />
        :
      <Notification message={'There are no contacts'} />
        }
      {isLoading && !isError && (
        <ColorRing
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#9370DB', '#663399', '#e15b64']}
        />
      )}  
      </Section>  
    </>
  )
}

export default App

