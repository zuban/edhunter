/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import UserType from '../types/UserType';
import { User, UserLogin, UserClaim, UserProfile } from '../../data/models';

const me = {
  type: UserType,
  async resolve({ request }) {
    const user = await UserProfile.find({
      userId: request.user.id,
    });
    return {
      id: request.user.id,
      email: request.user.email,
      name: user.displayName,
    };
  },
};

export default me;
