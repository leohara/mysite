import Education from "./_presenter/Education";
import Experience from "./_presenter/Experience";
import Favorite from "./_presenter/Favorite";
import Profile from "./_presenter/Profile";
import Stack from "./_presenter/Stack";

export default function Container() {
  return (
    <>
      <Profile />
      <Favorite />
      <Experience />
      <hr />
      <Education />
      <Stack />
    </>
  );
}
