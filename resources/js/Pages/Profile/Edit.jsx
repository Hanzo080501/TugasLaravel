import Dashboard from '../Dashboard';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
  return (
    <>
      <Head title="Profile" />
      <Dashboard auth={auth}>
        <div className="p-5  max-w-[80%] ms-2 mt-4">
          <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
            <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
              <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
              />
            </div>

            <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
              <UpdatePasswordForm className="max-w-xl" />
            </div>

            <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
              <DeleteUserForm className="max-w-xl" />
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
