# Coding project for UI candidates
This project tests a range of basic UI and client-side development skills. Please review the attached mockup and build it to spec. Please understand that not every detail is spelled out in the spec. Part of your challenge is to cover edge cases and  follow best-practices on our own. This project should take about 2 hours.

**Set up**

You will need Node.js installed, that's all.

**Step 1** 

Get a free API account: 
- Go here: https://sandbox-rest.avatax.com/swagger/ui/index.html
- Scroll down to **Free**
- Expand `POST /api/v2/accounts/freetrials/request`
- Click **Try it out**
- In the sample JSON change `email` to your email
- Click **Execute**
- See response JSON below that and note the `"accountDetailsEmailedTo": "[your email]"`
- Click the https://sandbox.admin.avalara.com/ link in that email, log in with your username and temporary password, and reset your password. Do not use any of your personal passwords!

**Step 2**

Build a UI that meets the requirements given to you by your recruiter. You'll need to use two dependencies:
- Data from the AvaTax [TaxRatesByAddress](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Free/TaxRatesByAddress/) endpoint
- [Avalara's design system](https://s-docs.assets.avalara.com) for UI elements

**Step 3** 

Zip your project up and email it to the recruiter.

## FAQ
- _What framework should I use?_ Your choice, including no framework at all. This is not a framework test.
- _Am I supposed to make the UI look exactly like the mockup?_ Yes and the necessary stylesheet is already linked to in the app. Simply refer to the design system docs in Step 2.
- _This is taking me longer than I thought or I haven't got to start yet, can I have more time?_ Yes. Please message the recruiter with a new estimate.
