import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const onAddNewMeetupHandler = (enterData) => {
      console.log(enterData)
  };
  return <NewMeetupForm onAddMeetup={onAddNewMeetupHandler} />;
}

export default NewMeetupPage;
