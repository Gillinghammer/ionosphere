import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';

function SiteForm() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="domain" ref={register} /> {/* register an input */}
      <button>Submit</button>
    </form>
  );
}

export default withAuthenticator(SiteForm, true);
