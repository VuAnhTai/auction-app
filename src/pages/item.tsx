import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthProvider } from '@/packages/common/hooks/useAuth';
import { createItemApi } from '@/packages/rest/private/items';
import router from 'next/router';
import PrivateLayout from '@/layout/PrivateLayout';
import { Form } from '@/common/headless/Form';

export default function PageItem() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm({
    defaultValues: {
      name: '',
      currentPrice: 1,
      duration: 10,
    },
  });

  const onSubmit = async (data: any) => {
    await createItemApi(data);
    setIsSubmitting(true);
    setIsSubmitting(false);

    router.push('/');
  };

  return (
    <AuthProvider>
      <PrivateLayout>
        <div className='bg-white rounded-lg'>
          <h2 className='text-lg font-medium mb-6'>Create Item</h2>
          <Form methods={methods} onSubmit={onSubmit}>
            <div className='mb-4'>
              <Form.Input
                className='mb-4'
                label='Name'
                name='name'
                placeholder='Name'
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter a name',
                  },
                  min: {
                    value: 0,
                    message: 'Please enter a name',
                  },
                }}
              />
              <Form.ErrorMessage name='name' />
            </div>
            <div className='mb-4'>
              <Form.Input
                className='mb-4'
                label='Start Price'
                name='currentPrice'
                type='number'
                placeholder='Start Price'
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter start price',
                  },
                  min: {
                    value: 1,
                    message: 'Please enter start price greater than 0',
                  },
                }}
              />
              <Form.ErrorMessage name='currentPrice' />
            </div>
            <div className='mb-4'>
              <Form.Input
                className='mb-4'
                label='Duration (seconds)'
                name='duration'
                type='number'
                placeholder='Duration (seconds'
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter duration',
                  },
                  min: {
                    value: 10,
                    message: 'Please enter duration greater than 10',
                  },
                }}
              />
              <Form.ErrorMessage name='duration' />
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-indigo-600 text-white px-4 py-2 rounded-lg'>
                {isSubmitting ? 'Creating...' : 'Create'}
              </button>
            </div>
          </Form>
        </div>
      </PrivateLayout>
    </AuthProvider>
  );
}
