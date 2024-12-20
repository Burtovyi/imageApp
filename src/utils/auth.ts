import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  User,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';
import { setUserInfo, clearUserInfo } from '../redux/reducers/userSlice';
import { AppDispatch } from '../redux/store/store';
import { addUser, getUser, updateUserInFirestore } from './firestore';

interface AuthCredentials {
  email: string;
  password: string;
}

export const registerDB = async ({ email, password }: AuthCredentials) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    await addUser(user.uid, {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
    });
  } catch (error) {
    console.log('SIGNUP ERROR:', error);
  }
};

export const loginDB = async (
  { email, password }: AuthCredentials,
  dispatch: AppDispatch
) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;

    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user?.email || '',
        displayName: user?.displayName || '',
        profilePhoto: user?.photoURL || '',
      })
    );
    return user;
  } catch (error) {
    throw error;
  }
};

export const logoutDB = async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);

    dispatch(clearUserInfo());
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export const authStateChanged = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid);

      dispatch(
        setUserInfo({
          ...userData,
          uid: user.uid,
          email: user.email || '',
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
  });
};

// Оновлення профілю користувача
// export const updateUserProfile = async (update: { displayName?: string; photoURL?: string }) => {
//   const user = auth.currentUser;
//   if (user) {
//     try {
//       await updateProfile(user, update);
//     } catch (error) {
//       throw error;
//     }
//   }
// };
