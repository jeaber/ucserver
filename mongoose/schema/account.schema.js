var accountSchema = mongoose.Schema({
	username: { type: String, unique: true },
	password: { type: String },
	orders: {
		updated: { type: Date, default: Date.now },
		data: []
	},
	autotrade: { type: Boolean },
	buylist: [{
		symbol: { type: String, uppercase: true, unique: true },
		price: { type: Number },
		quantity: { type: Number },		
	}],
	dividends: [{
		date: { type: Date, default: Date.now },
		payoutTotal: { type: Number },
		symbol: { type: String }
	}],
	profile: {
		updated: { type: Date, default: Date.now },
		annual_income: { type: String },
		investment_experience: { type: String },
		updated_at: { type: String },
		risk_tolerance: { type: String },
		total_net_worth: { type: String },
		liquidity_needs: { type: String },
		investment_objective: { type: String },
		source_of_funds: { type: String },
		user: { type: String },
		suitability_verified: { type: Boolean },
		tax_bracket: { type: String },
		time_horizon: { type: String },
		liquid_net_worth: { type: String },
	},
	account: {
		updated: { type: Date, default: Date.now },
		account_number: { type: String },
		buying_power: { type: String },
		cash: { type: String },
		cash_available_for_withdrawal: { type: String },
		cash_balances: { type: String },
		cash_held_for_orders: { type: String },
		created_at: { type: String },
		deactivated: { type: String },
		deposit_halted: { type: String },
		instant_eligibility: {},
		margin_balances: {},
		max_ach_early_access_amount: { type: String },
		only_position_closing_trades: { type: String },
		portfolio: { type: String },
		positions: { type: String },
		sma: { type: String },
		sma_held_for_orders: { type: String },
		sweep_enabled: { type: Boolean },
		type: { type: String },
		uncleared_deposits: { type: String },
		unsettled_funds: { type: String },
		updated_at: { type: String },
		url: { type: String },
		user: { type: String },
		withdrawal_halted: { type: Boolean }
	},
	positions: {
		updated: { type: Date, default: Date.now },
		data: []
	},
	portfolio: {
		updated: { type: Date, default: Date.now },
		account: { type: String },
		adjusted_equity_previous_close: { type: String },
		equity: { type: String },
		equity_previous_close: { type: String },
		excess_maintenance: { type: String },
		excess_maintenance_with_uncleared_deposits: { type: String },
		excess_margin: { type: String },
		excess_margin_with_uncleared_deposits: { type: String },
		extended_hours_equity: { type: String },
		extended_hours_market_value: { type: String },
		last_core_equity: { type: String },
		last_core_market_value: { type: String },
		market_value: { type: String },
		start_date: { type: String },
		unwithdrawable_deposits: { type: String },
		unwithdrawable_grants: { type: String },
		url: { type: String },
		withdrawable_amount: { type: String },
	}

});