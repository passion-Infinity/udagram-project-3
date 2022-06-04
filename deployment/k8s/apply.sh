kubectl apply --filename=\
aws-secret.yml,\
udagram-api-feed-deployment.yml,\
udagram-api-feed-service.yml,\
udagram-api-user-deployment.yml,\
udagram-api-user-service.yml,\
env-configmap.yml,\
env-secret.yml,\
frontend-deployment.yml,\
frontend-service.yml,\
reverseproxy-deployment.yml,\
reverseproxy-service.yml,\
autoscales.yml