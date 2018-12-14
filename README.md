# Candidate Screener for UI
Screener project for UI Engineering candidates
## Coding project
Candidate is being asked to create a free API account here and build some basic UI

Getting a free API account: 
- Go here: https://sandbox-rest.avatax.com/swagger/ui/index.html
- Scroll down to **Free**
- Expand `POST /api/v2/accounts/freetrials/request`
- Click **Try it out**
- In the sample JSON change `email` to your email
- Click **Execute**
- See response JSON below, note the `"accountDetailsEmailedTo": "your_email@example.com"`
- Click the https://sandbox.admin.avalara.com/ link in your email and login with your username and temporary password. Then reset your password.

Using data from the [Tax Rates By Address](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/TaxRatesByAddress/) endpoint, build the following UI:
- Input amount
- Input address
- Calculate
- Display an accurate total
