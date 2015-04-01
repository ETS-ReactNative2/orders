import React from 'react'
let {PropTypes, Component} = React
import Immutable from 'immutable'

export default class PiecesTable extends Component {
	static propTypes = {
		addPiece: PropTypes.func.isRequired,
		removePiece: PropTypes.func.isRequired,
		pieces: PropTypes.instanceOf(Immutable.List).isRequired,
	}

	render() {
		return <table className="material striped table">
			<caption>Materials <button onClick={() => this.props.addPiece(this.props.orderId)}>+</button></caption>
			<thead>
				<tr>
					<th className="qty">Qty</th>
					<th className="part">Piece</th>
					<th className="material">Material</th>
					<th className="kind">Description</th>
					<th className="dim" colSpan={3}>Dimensions <abbr title="Length / Width / Height">(L/W/H)</abbr></th>
					<th className="notes">Notes</th>
					<th className="cost">Cost</th>
					<th className="action add"><button onClick={() => this.props.addPiece(this.props.orderId)}>+</button></th>
				</tr>
			</thead>
			<tbody>
				{this.props.pieces.map((piece, index) =>
					<tr key={index}>
						<td className="qty"><input value={piece.qty} type="number" /></td>
						<td className="part"><input value={piece.part} list="part-list" /></td>
						<td className="material"><input value={piece.material} list="material-list" /></td>
						<td className="kind"><input value={piece.kind} list="kind-list" /></td>
						<td className="dim length"><input value={piece.length} /></td>
						<td className="dim width"><input value={piece.width} /></td>
						<td className="dim height"><input value={piece.height} /></td>
						<td className="notes"><input value={piece.notes} /></td>
						<td className="cost"><input value={piece.amount} type="number" /></td>
						<td className="action delete"><button onClick={() => this.props.removePiece(this.props.orderId, index)}>–</button></td>
					</tr>
				).toArray()}
			</tbody>
		</table>
	}
}
