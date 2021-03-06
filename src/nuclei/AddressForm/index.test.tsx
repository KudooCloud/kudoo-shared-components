import React from 'react';
import AddressForm from './index';
import { Formik } from 'formik';
import { render } from 'enzyme';
import { action } from '@storybook/addon-actions';
import { I18nProvider } from '@lingui/react';
import KudooThemeProvider, { theme } from 'components/config/theme';
import toJson from 'enzyme-to-json';

it('renders AddressForm', () => {
  const wrapper = render(
    <I18nProvider language="en">
      <KudooThemeProvider theme={theme}>
        <div style={{ margin: 10, width: 600 }}>
          <Formik
            initialValues={{
              street: '',
              city: '',
              state: '',
              country: '',
              postcode: '',
            }}
            onSubmit={action('onSubmit')}
            render={(formProps) => (
              <form onSubmit={formProps.handleSubmit}>
                <AddressForm />
              </form>
            )}
          />
        </div>
      </KudooThemeProvider>
    </I18nProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
