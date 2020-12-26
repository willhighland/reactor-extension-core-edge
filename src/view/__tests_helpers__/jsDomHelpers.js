/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

export const changePickerValue = async (select, newValue) => {
  const { findByText } = screen;
  let span;

  await act(async () => {
    fireEvent.click(select);
    span = await findByText(newValue, {
      selector: 'span[class^="_spectrum-Menu"]'
    });
    fireEvent.click(span);
  });
};

export const inputOnChange = (input, value) =>
  fireEvent.change(input, {
    target: { value }
  });
