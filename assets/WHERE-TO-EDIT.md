# Where to Edit Dashboard & Cash Amounts

## Account balances and labels (Checking, Savings, Net Worth)

**File:** `src/data/accountData.ts`

- **Checking:** `accountData.checking.name`, `accountData.checking.number`, `accountData.checking.balance`, `accountData.checking.available`
- **Savings:** `accountData.savings.name`, `accountData.savings.number`, `accountData.savings.balance`, `accountData.savings.available`
- **Net Worth (total):** `accountData.totalBalance`

Set any of these to `0` or another number. Names and numbers are strings; balances are numbers.

## Credit Cards and Investments summary (the two cards under Net Worth)

**File:** `src/data/accountData.ts`

- **Credit Cards total:** `dashboardSummary.creditCardsBalance` (e.g. `0` or `1500.50`)
- **Investments total:** `dashboardSummary.investmentsBalance` (e.g. `0` or `25000`)

Both default to `0`. Change them to any number to show that amount on the dashboard.

## Logo

See **HOW-TO-CHANGE-LOGO.md** in this folder for changing the logo image and size.
