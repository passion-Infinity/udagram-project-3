export const config = {
  // 'username': process.env.POSTGRES_USERNAME,
  'username': 'postgres',
  // 'password': process.env.POSTGRES_PASSWORD,
  'password': 'asdfghjkl123',
  // 'database': process.env.POSTGRES_DB,
  'database': 'postgres',
  // 'host': process.env.POSTGRES_HOST,
  'host': 'rdsp3.cq6mphs6s1uz.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  // 'aws_region': process.env.AWS_REGION,
  'aws_region': 'us-east-1',
  // 'aws_profile': process.env.AWS_PROFILE,
  'aws_profile': 'default',
  // 'aws_media_bucket': process.env.AWS_BUCKET,
  'aws_media_bucket': 'udagram-913427489295-dev',
  'url': process.env.URL,
  'jwt': {
    // 'secret': process.env.JWT_SECRET,
    'secret': 'project3',
  },
};
