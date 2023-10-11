import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import { useGetUser } from "../../hooks/useGetUser";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { ButtonPrimary } from "../../components/Button";
import * as Styled from "./Profile.style";

const Profile = () => {
  const { userId } = useParams();

  const { data: user } = useGetUser(userId);
  const { mutate: deleteUser } = useDeleteUser();

  function handleDeleteAccount() {
    if (confirm("Are you sure you want to delete your account?")) {
      deleteUser(userId);
    }
  }

  return user ? (
    <Styled.Container>
      <h2>Profile</h2>
      <Styled.Content>
        <p>Username: {user.username}</p>
        <p>
          Email: {user.email}{" "}
          {user.isVerified ? "(verified)" : "(not verified)"}
        </p>
        <p>Created: {dayjs(user.createdAt).format("M/DD/YYYY")}</p>
      </Styled.Content>
      <ButtonPrimary label="Delete Account" onClick={handleDeleteAccount} />
    </Styled.Container>
  ) : null;
};

export default Profile;
