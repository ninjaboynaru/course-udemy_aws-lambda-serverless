# AWS Lambda & Serverless - Developer Guide with Hands-on Labs
## Links
1. [Udemy Course](https://www.udemy.com/course/aws-lambda-serverless-developer-guide-with-hands-on-labs/learn/)
2. [Project Code](https://github.com/awsrun/aws-serverless)

## Quickly configure AWS CLI credentials for long term use
1. Install the AWS CLI
2. Locate the aws config folder in `~/.aws`
3. Open or create a file called `credentials`
4. Place the fallowing in that file
```
[default]
aws_access_key_id = yourAccessKey
aws_secret_access_key = yourSecretAccessKey
```

Alteratively, you can run `aws configure` from the command line which will essentially do the same thing