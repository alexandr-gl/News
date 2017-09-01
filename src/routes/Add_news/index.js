import { injectReducer } from '../../store/reducers'
import Addnews from "./components/Addnews";

export default (store) => ({
  path : 'addnews',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Content = require('./containers/AddnewsContainer').default
      const reducer = require('./modules/addnews').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'addnews', reducer })

      /*  Return getComponent   */
      cb(null, Addnews)

    /* Webpack named bundle   */
    }, 'addnews')
  }
})
