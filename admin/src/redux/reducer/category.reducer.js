import { categoryConstants } from '../action/constants'

const initialState = {
  categories: [],
  error: null,
  loading: false
};


const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];
  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        children: []
      }
    ];
  }
  for (let cat of categories) {
    if (cat._id == parentId) {
      const newCategory = {
        _id: category._id,
        name: category.name,
        _parentId: category._parentId,
        children: [],
        slug: category.slug,
        type:category.type
      }
      myCategories.push({
        ...cat,
        children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory]
      })
    } else {
      myCategories.push({
        ...cat,
        children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
      })
    }
  }
  return myCategories;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        categories: action.payload.categories
      }
      break;
    case categoryConstants.ADD_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCat = buildNewCategories(category.parentId, state.categories, category);
      state = {
        ...state,
        categories: updatedCat,
        loading: false
      }
      break;
    case categoryConstants.ADD_CATEGORY_FAILURE:
      state = {
        ...initialState
      }
      break;

    case categoryConstants.UPDATE_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.UPDATE_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false
      }
      break;
    case categoryConstants.UPDATE_CATEGORY_FAILURE:
      state = {
        ...initialState,
        error: action.payload.error
      }
      break;

    case categoryConstants.DELETE_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.DELETE_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false
      }
      break;
    case categoryConstants.DELETE_CATEGORY_FAILURE:
      state = {
        ...initialState,
        error: action.payload.error,
        loading: true
      }
      break;
  }
  return state
}