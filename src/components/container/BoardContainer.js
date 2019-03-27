import { connect } from 'react-redux';
import { moveCard, fetchState, updateRemoteState } from '../../redux/actions';
import Board from '../presentational/Board';

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    updateCards: (cardId, userId) => dispatch(moveCard(cardId, userId)),
    fetchState: () => dispatch(fetchState),
    updateRemoteState: () => dispatch(updateRemoteState)
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);