import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../preview-collection/preview-collection.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
