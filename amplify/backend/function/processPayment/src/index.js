/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "ap-northeast-1_t7FjyuCM9";
const stripe = require("stripe")(
  "pk_test_51KFf1IAb174uvQEmwO8RSbDazThTmDaaRaSjyuinqaazeC8yESf1nCwkk9lqQmjEmEvkOTHfbYGs3pwZSi5B61w300V1ehp0jM"
);

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { id, cart, total, address, token } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    await stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      source: token,
      description: `Order ${new Date()} by ${username} with ${email}`,
    });
    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};
