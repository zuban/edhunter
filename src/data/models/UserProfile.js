/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const UserProfile = Model.define('UserProfile', {
  userId: {
    type: DataType.UUID,
    primaryKey: true,
  },

  displayName: {
    type: DataType.STRING(100),
  },

  picture: {
    type: DataType.STRING(255),
  },

  gender: {
    type: DataType.STRING(50),
  },

  location: {
    type: DataType.STRING(100),
  },

  website: {
    type: DataType.STRING(255),
  },

  type: {
    type: DataType.STRING(100),
  },

  phone: {
    type: DataType.STRING(100),
  },

  about: {
    type: DataType.STRING(255),
  },

  name: {
    type: DataType.STRING(255),
  },

  course: {
    type: DataType.STRING(255),
  },

  company: {
    type: DataType.STRING(255),
  },

  contactPerson: {
    type: DataType.STRING(255),
  },

  requirements: {
    type: DataType.STRING(255),
  },

  university: {
    type: DataType.STRING(255),
  },
});

export default UserProfile;
