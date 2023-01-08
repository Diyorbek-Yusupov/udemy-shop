import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React from "react";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
   convertCollectionsSnapshotToMap,
   db,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/withSpinner/WithSpinner";
import Collection from "../collection/Collection.page";
import withRouter from "../../utils/whithParams";
import { createStructuredSelector } from "reselect";
import {
   selectArrayShopData,
   selectShopData,
} from "../../redux/shop/shop.selector";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class Shop extends React.Component {
   state = {
      loading: true,
   };
   componentDidMount() {
      const { setCollections } = this.props;
      const collectionRef = collection(db, "collections");

      getDocs(collectionRef).then((snapshot) => {
         setCollections(convertCollectionsSnapshotToMap(snapshot));
         this.setState({ loading: false });
      });
   }

   componentWillUnmount() {
      console.log("component will unmount");
   }
   render() {
      const { params, collections, collectionsList } = this.props;

      return params.categoryId ? (
         <CollectionWithSpinner
            isLoading={this.state.loading}
            collection={collections[params.categoryId]}
         />
      ) : (
         <CollectionsOverviewWithSpinner
            isLoading={this.state.loading}
            collections={collectionsList}
         />
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   setCollections: (collectionsMap) => {
      dispatch(updateCollections(collectionsMap));
   },
});

const mapStateToProps = createStructuredSelector({
   collections: selectShopData,
   collectionsList: selectArrayShopData,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shop));
