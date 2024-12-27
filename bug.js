This error typically occurs when there's a mismatch between the Expo CLI version and the project's SDK version.  It can also happen due to corrupted cache or incorrect configuration within the project's `package.json` and `app.json` files.  The error message itself might not be entirely clear about the root cause, making it an uncommon issue to diagnose.

Example Scenario:  A project is created with Expo CLI v4.14, targeting SDK 46. Later, the user updates the CLI to v5.0 but fails to update the SDK version in app.json, leading to this obscure error.