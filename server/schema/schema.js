import _ from 'lodash'

import { userTypes } from './types/userType.js';
import { userResolvers } from './resolvers/userResolver.js';

import { productTypes } from './types/productType.js';
import { productResolvers } from './resolvers/productResolver.js';

import { cartTypes } from './types/cartType.js';
import { cartResolvers } from './resolvers/cartResolver.js';

import { wishlistTypes } from './types/wishlistType.js';
import { wishlistResolvers } from './resolvers/wishlistResolver.js';


const Query = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: { 
    hello: () => 'Hello world!'
  }
};

export const _typeDefs = [Query, userTypes, productTypes, cartTypes, wishlistTypes];
export const _resolvers = _.merge(resolvers, userResolvers, productResolvers, cartResolvers, wishlistResolvers);