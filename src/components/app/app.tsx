import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const/const';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
      <Route path={AppRoute.Login} element={<LoginScreen />} />
      <Route path='*' element={<NotFoundScreen />} />
    </Routes>
  );
}
