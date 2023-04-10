# basic_invoke_sync

## Some learned things of note
1. The `--cli-binary-format raw-in-base64-out` option allows you to send a raw json string as the payload in `aws lambda invoke` instead of having to encode the payload in base64
2. With AWS CLI commands, the `--query` argument specifies what part of the command response to filter out. If the command response has two keys `LogResult` and `StatusCode` then specifying `--query ResponseCode` will only return the `StatusCode` in the console as the result of the command